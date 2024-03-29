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

const allProjectArticle = `{
  allContentfulProgetti {
    group(field: {project_category: {slug: SELECT}}) {
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
}`

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

type CorsiCorrelati = {
  idCorso: string
}

type Node = {
  slug: string
  is_Visible: boolean
  corsi_correlati: CorsiCorrelati[]
}

type AllContentfulGuida = {
  nodes: Node[]
}

type Data = {
  allContentfulGuida: AllContentfulGuida
}

export type GuideQueryProps = {
  data: Data
}

const guideQuery = `
 {
  allContentfulGuida {
    nodes {
      slug
      is_Visible
      corsi_correlati {
        idCorso
      }
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
