import { call, put, select } from "redux-saga/effects"
import {
  AddMoviesActionCreator,
  FetchMoviesActionCreator,
  SetMoviesActionCreator,
  SetNextUrlActionCreator,
  SetPageActionCreator,
  SetPageSizeActionCreator,
} from "../actions"
import { FetchMoviesResponse, Movie } from "../types"
import { getMovies, getPage, getPageSize } from "../selectors"
import { cleanUpObject, getSearchParams, isEqual } from "../utils"

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
}

async function makeRequest(searchParams: any) {
  const url = new URL("/titles", import.meta.env.VITE_API_URL)
  url.search = new URLSearchParams(cleanUpObject(searchParams)).toString()

  const response: Response = await fetch(url, options)
  const result: FetchMoviesResponse = await response.json()

  return result
}

let previous: any = null

export default function* fetchMovies(action: ReturnType<typeof FetchMoviesActionCreator>) {
  try {
    const params = getSearchParams()
    const isParamsChanged = !previous || !isEqual(params, previous)

    previous = params

    const currentPageSize: number = yield select(getPageSize)
    const nextPageSize: number = action.payload?.pageSize || currentPageSize
    const isPageSizeChanged: boolean = nextPageSize !== currentPageSize

    const shouldReset: boolean = isParamsChanged || isPageSizeChanged

    const currentPage: number = yield select(getPage)
    const nextPage: number = shouldReset ? 1 : action.payload?.page || currentPage

    const movies: Movie[] = yield select(getMovies)

    if (shouldReset || movies.length < nextPage * nextPageSize) {
      const result: FetchMoviesResponse = yield call(makeRequest, {
        page: nextPage,
        limit: nextPageSize,
        genre: params.genre,
        titleType: params.type,
        year: params.year,
      })

      if (shouldReset) {
        yield put(SetMoviesActionCreator(result.results))
      } else {
        yield put(AddMoviesActionCreator(result.results))
      }

      yield put(SetNextUrlActionCreator(result.next))
    }

    yield put(SetPageActionCreator(nextPage))
    yield put(SetPageSizeActionCreator(nextPageSize))
  } catch (error) {
    console.log("error", error)
  }
}
