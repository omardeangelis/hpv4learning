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
`

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
`

const allProjectArticle = `
{
  allContentfulProgetti {
    group(field: project_category___slug) {
      fieldValue
      nodes {
        id
        slug
        ordine
        corsi {
          id
          idCorso
        }
      }
    }
  }
}
`

const projectCategoriesPageQuery = `
{
  allContentfulProjectCategory {
    nodes {
      slug
      title
      description
      metaDescription
      metaTitle
      id
      categoryProjects {
        titolo
      }
    }
  }
}
`

const guideQuery = `
 {
  allContentfulGuida {
    nodes {
      slug
    }
  }
}
`

export {
  allCourseQuery,
  allCourseCategory,
  allProjectArticle,
  projectCategoriesPageQuery,
  guideQuery,
}
