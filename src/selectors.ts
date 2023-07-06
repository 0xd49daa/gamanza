import { State } from "./types"

export function getMovies(state: State) {
  return state.movies
}

export function getNextUrl(state: State) {
  return state.nextUrl
}

export function getMoviesPage(state: State) {
  const page = getPage(state)
  const pageSize = getPageSize(state)

  return state.movies.slice((page - 1) * pageSize, page * pageSize)
}

export function getPage(state: State) {
  return state.page
}

export function getPageSize(state: State) {
  return state.pageSize
}
