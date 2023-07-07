import { State } from "./types.ts"

export function getMovies(state: State) {
  return state.movies
}

export function getNextUrl(state: State) {
  return state.nextUrl
}
