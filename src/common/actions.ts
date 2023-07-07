import { createAction } from "@reduxjs/toolkit"
import { Movie } from "./types.ts"

type FetchMoviesParams = {
  page?: number
  pageSize?: number
  genre?: string
  type?: string
  year?: string
}

export const FetchMoviesActionCreator = createAction<FetchMoviesParams>("movies/fetchMovies")
export const AddMoviesActionCreator = createAction<Movie[]>("movies/addMovies")
export const SetMoviesActionCreator = createAction<Movie[]>("movies/setMovies")
export const SetNextUrlActionCreator = createAction<string>("movies/setNextUrl")
