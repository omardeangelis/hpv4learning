const { isEmpty } = require("lodash");
const path = require(`path`);
const {
  allCourseQuery,
  allCourseCategory,
  allProjectArticle,
  projectCategoriesPageQuery,
} = require("./query");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const singleCourseQuery = await graphql(allCourseQuery);
  const courseCategoryQuery = await graphql(allCourseCategory);
  const projectArticleQuery = await graphql(allProjectArticle);
  const categoryProjectQuery = await graphql(projectCategoriesPageQuery);

  singleCourseQuery.data.allContentfulCorsi.nodes.forEach((node) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/template/SingleCoursePage.tsx`),
      context: {
        slug: node.slug,
        categorySlug: node.category.filter(
          (category) => category.slug !== "gratuiti",
        )[0].slug,
      },
    });
  });

  courseCategoryQuery.data.allContentfulCategory.nodes.forEach((category) => {
    const {
      slug,
      name,
      description: { description },
      alias,
    } = category;
    createPage({
      path: `/corsi/${slug}/`,
      component: path.resolve("./src/template/Category.tsx"),
      context: {
        slug,
        name,
        alias,
        description,
      },
    });
  });

  createPage({
    path: "/progetti/",
    component: path.resolve("./src/template/ProjectsHome.tsx"),
  });

  categoryProjectQuery.data.allContentfulProjectCategory.nodes.forEach(
    (category) => {
      if (!isEmpty(category.categoryProjects)) {
        const numOfElement = 9;
        const pages = Math.ceil(
          category.categoryProjects.length / numOfElement,
        );

        Array.from({ length: pages }, (_, index) => {
          const start = numOfElement * index;
          createPage({
            path: `/progetti/${category.slug}${
              index === 0 ? "/" : `/${index + 1}/`
            }`,
            component: path.resolve("./src/template/ProjectsCategory.tsx"),
            context: {
              slug: category.slug,
              title: category.title,
              description: category.description,
              limit: numOfElement,
              skip: start,
              pages,
              currentPage: index + 1,
              hasNextPage: pages <= index + 2,
              id: category.id,
            },
          });
        });
      }
    },
  );

  projectArticleQuery.data.allContentfulProgetti.nodes.forEach((project) => {
    const courseSlug = project.project_category?.[0]?.slug;
    let slug = project.titolo;
    slug = slug
      .replace(/\s/g, "-")
      .replace(/[^a-zA-Z0-9-]/g, "")
      .toLowerCase();
    const nextProjectOrder = project.ordine + 1;
    const courseId = project.corsi[0].idCorso;
    if (project.body && courseSlug) {
      createPage({
        path: `/progetti/${courseSlug}/${slug}/`,
        component: path.resolve(`./src/template/ProjectArticle.tsx`),
        context: {
          id: project.id,
          nextProjectOrder,
          courseId,
        },
      });
    }
  });
};
