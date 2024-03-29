import dayjs from "dayjs"

export const createBrandText = (text?: string | null) => {
  if (text) {
    return text
      .replace(`**`, `<span class='brand-text'>`)
      .replace(`**`, `</span>`)
  }
}

export const createRowText = (text: string) =>
  text.replace(`**`, ``).replace(`**`, ``)

export const removeAllPointsFromString = (text: string) =>
  text.replace(/\./g, ``)

export const convertToHHMMSS = (time: number, short = false) => {
  const H = Math.floor(time / 3600)
  const i = Math.floor((time % 3600) / 60)
  const s = time % 60
  if (short) {
    return (time / 3600).toFixed(1)
  }
  return `${H}h ${i}m ${s}s`
}

export const rowalizer = <T>(array: T[] | readonly T[], itemPerRow = 3) => {
  if (array) {
    const newArray: T[][] = []
    const rows = Math.ceil(array.length / itemPerRow)
    Array.from({ length: rows }, (_, index) => {
      const start = index * itemPerRow
      const end = start + itemPerRow
      newArray.push(array.slice(start, end))
      return null
    })

    return newArray
  }
}

export const dateFormatter = (date: string) =>
  new Intl.DateTimeFormat(`it`, {
    day: `numeric`,
    month: `long`,
    year: `numeric`,
  }).format(new Date(Date.parse(date)))

export function cleanStringFromHtlmTags(text?: string | null) {
  if (!text) return
  return text
    .replace(/<\/?[^>]+(>|$)/g, ``)
    .replace(/(<p>&nbsp;<\/p>)|(<h2><span>&nbsp;<\/span><\/h2>)/g, ``)
}

export const isExpired = (date: Date | string) =>
  dayjs().isAfter(dayjs(date).add(30, `day`), `day`)

// Permette di dispatchare eventi Google
// export const createGAEvent = (event: string, content: string) => {
//   return () => {
//     if (typeof window !== "undefined") {
//       window.dataLayer = window.dataLayer || [];
//       window.dataLayer.push({
//         event: event,
//         content: content,
//       });
//     }
//   };
// };
