import { call, put, select } from "redux-saga/effects"
import {
  AddMoviesActionCreator,
  FetchMoviesActionCreator,
  SetMoviesActionCreator,
  SetNextUrlActionCreator,
} from "../common/actions.ts"
import { FetchMoviesResponse, Movie } from "../common/types.ts"
import { getMovies } from "../common/selectors.ts"
import { cleanUpObject, getSearchParams, isEqual } from "../common/utils.ts"
import { DEFAULT_PAGE_SIZE } from "../common/constants.ts"

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

let previousParams: any = {}
let previousPage = 1

export default function* fetchMovies(action: ReturnType<typeof FetchMoviesActionCreator>) {
  try {
    const { page, ...params } = action.payload

    const isParamsChanged = !isEqual(params, previousParams)

    console.log("isParamsChanged", isParamsChanged, "previousParams", previousParams, "params", params)

    previousParams = params

    const nextPageSize: number =
      action.payload?.pageSize ?? previousParams.previousPageSize ?? DEFAULT_PAGE_SIZE
    const nextPage: number = isParamsChanged ? 1 : action.payload?.page ?? previousPage

    const movies: Movie[] = yield select(getMovies)

    if (isParamsChanged || movies.length < nextPage * nextPageSize) {
      const result: FetchMoviesResponse = yield call(makeRequest, {
        page: nextPage,
        limit: nextPageSize,
        genre: params.genre,
        titleType: params.type,
        year: params.year,
      })

      if (isParamsChanged) {
        yield put(SetMoviesActionCreator(result.results))
      } else {
        yield put(AddMoviesActionCreator(result.results))
      }

      yield put(SetNextUrlActionCreator(result.next))
    }

    previousPage = nextPage
  } catch (error) {
    console.log("error", error)
  }
}
