import { takeEvery } from "redux-saga/effects"
import fetchMovies from "./fetchMovies"
import { FetchMoviesActionCreator } from "../common/actions.ts"

function* rootSaga() {
  yield takeEvery(FetchMoviesActionCreator, fetchMovies)
}

export default rootSaga
