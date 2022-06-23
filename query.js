const allCourseQuery = `
{
    allContentfulCorsi {
        nodes {
            slug
             category {
              slug
            }
        }
    }
}
`;

const allCourseCategory = `
{
  allContentfulCategory {
    nodes {
      slug
      name
      alias
      description{
          description
      }
    }
  }
}
`;

const allProjectArticle = `
{
  allContentfulProgetti {
    nodes {
      id
      titolo
      project_category {
        slug
      }
      body {
        body
      }
    }
  }
}
`;

const projectCategoriesPageQuery = `
{
  allContentfulProgetti {
    group(field: project_category___slug, limit: 1) {
      fieldValue
    }
  }
}
`;

module.exports = {
  allCourseQuery,
  allCourseCategory,
  allProjectArticle,
  projectCategoriesPageQuery,
};
