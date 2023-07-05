import { call, put, select } from "redux-saga/effects"
import { AddMoviesActionCreator, FetchMoviesActionCreator } from "../actions"
import { FetchMoviesResponse } from "../types"
import { getPage, getPageSize } from "../selectors"

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
}

export default function* fetchMovies(
  action: ReturnType<typeof FetchMoviesActionCreator>
) {
  try {
    const page: number = action.payload?.page || (yield select(getPage))
    const pageSize: number =
      action.payload?.pageSize || (yield select(getPageSize))

    const url = new URL("https://moviesdatabase.p.rapidapi.com/titles")
    url.search = new URLSearchParams({
      limit: pageSize.toString(),
      page: page.toString(),
    }).toString()

    const response: Response = yield call<any>(fetch, url, options)
    const result: FetchMoviesResponse = yield call(response.json.bind(response))
    yield put(AddMoviesActionCreator(result.results))
  } catch (error) {
    console.log("error", error)
  }
}
