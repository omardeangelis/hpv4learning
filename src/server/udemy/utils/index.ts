import { UDEMY_TOKEN } from "../../constants"
import fetch from "node-fetch";

export const udemyFetch = async (url: string, options?: HeadersInit) => {
   return fetch(url, { ...options, headers: {"Authorization": `Bearer ${UDEMY_TOKEN}`}})
}