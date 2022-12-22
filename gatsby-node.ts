import { isArray, isEmpty } from "lodash"
import path, { resolve } from "path"
import { Actions, GatsbyNode } from "gatsby"
import * as fs from "fs"
import {
  allCourseQuery,
  allCourseCategory,
  allProjectArticle,
  projectCategoriesPageQuery,
} from "./query"
import {
  getAllPaidAggregateCoursesStats,
  getAllReview,
  getAllPaidCourses,
} from "./src/server/udemy"
import {
  FreeCourseQueryProps,
  freeCourseQuery,
  createCoursePages,
} from "./src/server/gatsby/pages/courses/createCoursePages"

type RedirectType = { source: string; target: string; status: string }

const redirects: RedirectType[] = JSON.parse(
  fs.readFileSync(`./redirects.json`, `utf-8`)
)

export const sourceNodes: GatsbyNode["sourceNodes"] = async ({
  createNodeId,
  createContentDigest,
  actions,
}) => {
  const { createNode } = actions
  try {
    const reviews = await getAllReview()
    if (isArray(reviews)) {
      reviews.forEach((review) => {
        createNode({
          ...review,
          id: createNodeId(review.id.toString()),
          internal: {
            type: `UdemyReview`,
            content: JSON.stringify(review),
            contentDigest: createContentDigest(review),
          },
        })
      })
    }
  } catch (error) {
    throw new Error(`We Ragazzo, niente review`)
  }
  try {
    const courseStats = await getAllPaidAggregateCoursesStats()
    createNode({
      ...courseStats,
      id: createNodeId(`we-ragazzo`),
      internal: {
        type: `UdemyCoursesStats`,
        content: JSON.stringify(courseStats),
        contentDigest: createContentDigest(courseStats),
      },
    })
  } catch (error) {
    throw new Error(`We Ragazzo, niente statistiche dei corsi`)
  }

  try {
    const courses = await getAllPaidCourses()
    if (isArray(courses)) {
      courses.forEach((course) => {
        createNode({
          ...course,
          id: createNodeId(course.id),
          internal: {
            type: `UdemyPaidCourse`,
            content: JSON.stringify(course),
            contentDigest: createContentDigest(course),
          },
        })
      })
    }
  } catch (error) {
    throw new Error(`We Ragazzo, niente corsi ${error}`)
  }
}

export const createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions as Actions
  const singleCourseQuery = await graphql(allCourseQuery)
  const courseCategoryQuery = await graphql(allCourseCategory)
  const projectArticleQuery = await graphql(allProjectArticle)
  const categoryProjectQuery = await graphql(projectCategoriesPageQuery)
  const freeCourses = (await graphql(freeCourseQuery)) as FreeCourseQueryProps

  singleCourseQuery.data.allContentfulCorsi.nodes.forEach((node) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/template/SingleCoursePage.tsx`),
      context: {
        slug: node.slug,
        categorySlug: node.category
          .filter((category) => category.slug.toLowerCase() !== `gratuiti`)[0]
          .slug.toLowerCase(),
      },
    })
  })

  courseCategoryQuery.data.allContentfulCategory.nodes.forEach((category) => {
    const {
      slug,
      name,
      description: { description },
      alias,
    } = category
    createPage({
      path: `/corsi/${slug.toLowerCase()}/`,
      component: path.resolve(`./src/template/Category.tsx`),
      context: {
        slug,
        name,
        alias,
        description,
      },
    })
  })

  createPage({
    path: `/progetti/`,
    component: path.resolve(`./src/template/ProjectsHome.tsx`),
  })

  createPage({
    path: `/consulenze/`,
    component: path.resolve(`./src/template/Consulenze.tsx`),
  })

  categoryProjectQuery.data.allContentfulProjectCategory.nodes.forEach(
    (category) => {
      if (!isEmpty(category.categoryProjects)) {
        const numOfElement = 9
        const pages = Math.ceil(category.categoryProjects.length / numOfElement)

        Array.from({ length: pages }, (_, index) => {
          const start = numOfElement * index
          createPage({
            path: `/progetti/${category.slug.toLowerCase()}${
              index === 0 ? `/` : `/${index + 1}/`
            }`,
            component: path.resolve(`./src/template/ProjectsCategory.tsx`),
            context: {
              slug: category.slug.toLowerCase(),
              title: category.title,
              metaDescription: category.metaDescription,
              metaTitle: category.metaTitle,
              description: category.description,
              limit: numOfElement,
              skip: start,
              pages,
              currentPage: index + 1,
              hasNextPage: pages >= index + 2,
              id: category.id,
            },
          })
          return null
        })
      }
    }
  )

  projectArticleQuery.data.allContentfulProgetti.group.forEach((category) => {
    const slug = category.fieldValue
    const maxProjectsOrders = Math.max(
      ...category.nodes.map((project) => project.ordine)
    )
    category.nodes.forEach((project) => {
      const nextProjectOrder =
        project.ordine === maxProjectsOrders ? 1 : project.ordine + 1

      createPage({
        path: `/progetti/${slug}/${project.slug}/`,
        component: path.resolve(`./src/template/ProjectArticle.tsx`),
        context: {
          id: project.id,
          nextProjectOrder,
          courseId: project.corsi[0].idCorso,
        },
      })
    })
  })

  redirects.forEach((redirect: RedirectType) => {
    createRedirect({
      fromPath: redirect.source,
      toPath: redirect.target,
      redirectInBrowser: true,
      statusCode: Number(redirect.status),
    })
  })

  if (process.env.NODE_ENV === `development`)
    createCoursePages({
      corsi: freeCourses.data.allContentfulCorsi.nodes,
      createPage,
      component: resolve(`./src/template/courses/FreeCourse.tsx`),
    })
}
