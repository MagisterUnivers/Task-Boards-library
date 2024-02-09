import { fetchAPI } from "./api/fetch-api"

export async function getBoardsFromDB () {
  const data = await fetchAPI(`/search/`, { method: 'GET'})
  return data ?? null
}
