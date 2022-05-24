const path = require(`path`);
const { allCourseQuery, allCourseCategory } = require("./query");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const singleCourseQuery = await graphql(allCourseQuery);
  const courseCategoryQuery = await graphql(allCourseCategory);

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
};
