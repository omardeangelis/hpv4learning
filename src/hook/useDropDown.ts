import React from "react"

const useDropDownMenu = (menus: string[]) => {
  const [open, setOpen] = React.useState<string[]>([])
  const openMenu = React.useCallback(
    (item: string) => {
      setOpen((items) => [...items, item])
    },
    [open]
  )

  const closeMenu = React.useCallback(
    (item) => {
      setOpen(() => {
        const element = document.querySelector(`#${item}-menu`)
        if (element) {
          if (element.classList.contains(`show-dropdown`))
            element.classList.remove(`show-dropdown`)
          const icon = element.previousSibling?.lastChild as HTMLElement
          icon.classList.remove(`rotate-icon`)
        }
        return open.filter((menu) => menu !== item)
      })
    },
    [open]
  )

  const toggleMenu = React.useCallback(
    (item: string) => {
      if (open.find((x) => x === item)) {
        closeMenu(item)
        return
      }
      openMenu(item)
    },
    [openMenu, closeMenu]
  )

  React.useEffect(() => {
    open.forEach((el) => {
      if (typeof window !== `undefined`) {
        const element = document.querySelector(`#${el}-menu`)
        if (element) {
          if (menus.find((x) => x === el)) {
            const icon = element.previousSibling?.lastChild as HTMLElement
            icon.classList.add(`rotate-icon`)

            element.classList.add(`show-dropdown`)
          }
        }
      }
    })
  }, [open])

  return { toggleMenu }
}

export default useDropDownMenu
