export * from "./layout"
export * from "./course"

export type Mutable<Type> = {
  -readonly [Key in keyof Type]: Type[Key]
}
