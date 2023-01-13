import { ImageDataLike } from "gatsby-plugin-image"
import React from "react"

type ContextProps = {
  title?: Queries.Maybe<string>
  slug?: Queries.Maybe<string>
  image?: ImageDataLike
  students?: Queries.Maybe<number>
  avgRating?: Queries.Maybe<number>
  category?: Queries.Maybe<string>
  durata?: Queries.Maybe<string>
}

const initialValue: ContextProps = {
  title: ``,
  slug: ``,
}

const Context = React.createContext<ContextProps>(initialValue)

export const CourseBannerProvider = Context.Provider

export const useCourseBannerContext = () => React.useContext(Context)
