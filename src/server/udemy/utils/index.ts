import fetch from "node-fetch"
import { UDEMY_TOKEN } from "../../constants"

export const udemyFetch = async (url: string, options?: HeadersInit) =>
  fetch(url, {
    ...options,
    headers: { Authorization: `Bearer ${UDEMY_TOKEN}` },
  })
