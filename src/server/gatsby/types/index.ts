import { Actions } from "gatsby"

export type PageCreationHelperProps = {
  createPage: Actions["createPage"]
  component: string
}
