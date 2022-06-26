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
      ordine
      project_category {
        slug
      }
      body {
        body
      }
      corsi {
        idCorso
      }
    }
  }
}
`;

const projectCategoriesPageQuery = `
{
  allContentfulProjectCategory {
    nodes {
      slug
      id
      categoryProjects {
        titolo
      }
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
