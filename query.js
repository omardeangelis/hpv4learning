const allCourseQuery = `
{
    allContentfulCorsi {
        nodes {
            slug
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
      description{
          description
      }
    }
  }
}
`;

module.exports = { allCourseQuery, allCourseCategory };
