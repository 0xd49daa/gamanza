import { createAction } from "@reduxjs/toolkit"
import { Movie } from "./types"

type FetchMoviesParams = {
  page?: number
  pageSize?: number
}

export const FetchMoviesActionCreator = createAction<
  FetchMoviesParams | undefined
>("movies/fetchMovies")

export const AddMoviesActionCreator = createAction<Movie[]>("movies/addMovies")
export const SetMoviesActionCreator = createAction<Movie[]>("movies/setMovies")

export const SetPageAndRefetchActionCreator = createAction<number>(
  "movies/setPageAndRefetch"
)
export const SetPageSizeAndRefetchActionCreator = createAction<number>(
  "movies/setPageSizeAndRefetch"
)

export const SetPageActionCreator = createAction<number>("movies/setPage")
export const SetPageSizeActionCreator =
  createAction<number>("movies/setPageSize")
