export const DEFAULT_PAGE_SIZE = 10

export const REQUEST_OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
}
