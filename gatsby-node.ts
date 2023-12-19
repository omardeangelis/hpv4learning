import { isArray, isEmpty } from "lodash"
import path, { resolve } from "path"
import { Actions, GatsbyNode } from "gatsby"
import * as fs from "fs"
import {
  allCourseCategory,
  allProjectArticle,
  projectCategoriesPageQuery,
  guideQuery,
  GuideQueryProps,
} from "./query"
import {
  getAllPaidAggregateCoursesStats,
  getAllReview,
  getAllPaidCourses,
} from "./src/server/udemy"
import {
  CourseQueryProps,
  freeCourseQuery,
  udemyCourseQuery,
  createCoursePages,
} from "./src/server/gatsby/pages/courses/createCoursePages"
import {
  ArticleQueryProps,
  articleQuery,
  createArticlePages,
} from "./src/server/gatsby/pages/blog/createArticlePages"
import { isProduction } from "./src/constants"

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
          courseId: course.id,
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
  const courseCategoryQuery = await graphql(allCourseCategory)
  const projectArticleQuery = await graphql(allProjectArticle)
  const categoryProjectQuery = await graphql(projectCategoriesPageQuery)
  const allGuideQuery = (await graphql(guideQuery)) as GuideQueryProps
  const freeCourses = (await graphql(freeCourseQuery)) as CourseQueryProps
  const udemyCourses = (await graphql(udemyCourseQuery)) as CourseQueryProps
  const articles = (await graphql(articleQuery)) as ArticleQueryProps

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
    path: `/academy/`,
    component: path.resolve(`./src/template/Academy.tsx`),
  })

  createPage({
    path: `/progetti/`,
    component: path.resolve(`./src/template/ProjectsHome.tsx`),
  })

  createPage({
    path: `/formazione/`,
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
      if (project?.corsi?.[0]?.id)
        createPage({
          path: `/progetti/${slug}/${project.slug}/`,
          component: path.resolve(`./src/template/ProjectArticle.tsx`),
          context: {
            id: project.id,
            nextProjectOrder,
            udemyCourseId: Number(project?.corsi?.[0]?.idCorso || 0),
            courseId: project.corsi[0].id,
          },
        })
    })
  })

  allGuideQuery.data.allContentfulGuida.nodes.forEach((guida) => {
    const courseId = guida.corsi_correlati[0].idCorso
    if (guida.is_Visible || !isProduction)
      createPage({
        path: `/guide/${guida.slug}/`,
        component: path.resolve(`./src/template/Guide.tsx`),
        context: {
          courseId: Number(courseId || 0),
        },
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

  try {
    createCoursePages({
      corsi: freeCourses.data.allContentfulCorsi.nodes,
      createPage,
      component: resolve(`./src/template/courses/FreeCourse.tsx`),
    })
    createCoursePages({
      corsi: udemyCourses.data.allContentfulCorsi.nodes,
      createPage,
      component: resolve(`./src/template/courses/UdemyCourseTemplate.tsx`),
    })
  } catch (error) {
    throw new Error(`We Ragazzo, volevi creare i corsi ? E invece: ${error}`)
  }

  try {
    createArticlePages({
      articoli: articles.data.allContentfulArticolo.nodes,
      createPage,
      component: resolve(`./src/template/Article.tsx`),
    })
  } catch (error) {
    throw new Error(
      `We Ragazzo, volevi creare gli articoli ? E invece: ${error}`
    )
  }

  createPage({
    path: `/web-agency/`,
    component: resolve(`./src/template/web-agency/home/index.tsx`),
  })
  createPage({
    path: `/web-agency/siti-economici/`,
    component: resolve(`./src/template/web-agency/siti-economici/index.tsx`),
  })
}
