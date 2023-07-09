import { LoadField, State } from "./types.ts"

export function getMovies(state: State) {
  return state.movies || []
}

export function getMovie(id: string | undefined) {
  return (state: State) => getMovies(state).find((movie) => movie.id === id)
}

export function getNextUrl(state: State) {
  return state.nextUrl
}

export function getError(state: State) {
  return state.error
}

export function getField(field: LoadField) {
  return (state: State) => state[field]
}
