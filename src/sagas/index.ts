import { takeEvery } from "redux-saga/effects"
import fetchMovies from "./fetchMovies"
import { FetchFieldActionCreator, FetchMoviesActionCreator } from "../common/actions.ts"
import fetchField from "./fetchField.ts"

function* rootSaga() {
  yield takeEvery(FetchMoviesActionCreator, fetchMovies)
  yield takeEvery(FetchFieldActionCreator, fetchField)
}

export default rootSaga
