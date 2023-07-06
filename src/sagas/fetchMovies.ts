import { call, put, select } from "redux-saga/effects"
import {
  AddMoviesActionCreator,
  FetchMoviesActionCreator,
  SetMoviesActionCreator,
  SetPageActionCreator,
  SetPageSizeActionCreator,
} from "../actions"
import { FetchMoviesResponse, Movie } from "../types"
import { getMovies, getPage, getPageSize } from "../selectors"

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
}

async function makeRequest(page: number, pageSize: number) {
  const url = new URL("https://moviesdatabase.p.rapidapi.com/titles")
  url.search = new URLSearchParams({
    limit: pageSize.toString(),
    page: page.toString(),
  }).toString()

  const response: Response = await fetch(url, options)
  const result: FetchMoviesResponse = await response.json()

  return result.results
}

export default function* fetchMovies(
  action: ReturnType<typeof FetchMoviesActionCreator>
) {
  try {
    const currentPageSize: number = yield select(getPageSize)
    const nextPageSize: number = action.payload?.pageSize || currentPageSize
    const isPageSizeChanged: boolean = nextPageSize !== currentPageSize

    const currentPage: number = yield select(getPage)
    const nextPage: number = isPageSizeChanged
      ? 1
      : action.payload?.page || currentPage

    const movies: Movie[] = yield select(getMovies)

    if (isPageSizeChanged || movies.length < nextPage * nextPageSize) {
      const result: Movie[] = yield call(makeRequest, nextPage, nextPageSize)

      if (isPageSizeChanged) {
        yield put(SetMoviesActionCreator(result))
      } else {
        yield put(AddMoviesActionCreator(result))
      }
    }

    yield put(SetPageActionCreator(nextPage))
    yield put(SetPageSizeActionCreator(nextPageSize))
  } catch (error) {
    console.log("error", error)
  }
}
