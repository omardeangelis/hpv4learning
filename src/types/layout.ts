export type CategoryType = {
  categoria: string
  slug: string
}

export type CategoryMenuProps = {
  slug: string
  name: string
  seoDescription: string
  image?: {
    file: {
      url: string
    }
  }
}

export type BlockDescriptionProps = {
  description: string
  title: string
}

export type IconTypeProps =
  | "home"
  | "dropdown"
  | "project"
  | "about"
  | "videomakers"
  | "code"
  | "free"
  | "school"
