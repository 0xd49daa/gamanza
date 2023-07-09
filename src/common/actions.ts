import { createAction } from "@reduxjs/toolkit"
import { LoadField, Movie } from "./types.ts"

type FetchMoviesParams = {
  page?: number
  pageSize?: number
  genre?: string
  type?: string
  year?: string
}

export const FetchMoviesActionCreator = createAction<FetchMoviesParams>("movies/fetchMovies")
export const FetchFieldActionCreator = createAction<LoadField>("movies/fetchField")
export const SetFieldActionCreator = createAction<{ field: LoadField; value: (string | null)[] }>(
  "movies/setField"
)

export const AddMoviesActionCreator = createAction<Movie[]>("movies/addMovies")
export const SetMoviesActionCreator = createAction<Movie[]>("movies/setMovies")
export const SetNextUrlActionCreator = createAction<string>("movies/setNextUrl")
export const SetErrorActionCreator = createAction<unknown>("movies/setError")
export const SetLoadingActionCreator = createAction<boolean>("movies/setLoading")
