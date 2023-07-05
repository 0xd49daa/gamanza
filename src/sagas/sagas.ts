import { takeEvery } from "redux-saga/effects"
import fetchMovies from "./fetchMovies"
import {
  FetchMoviesActionCreator,
  SetPageAndRefetchActionCreator,
} from "../actions"
import setPageAndRefetch from "./setPageAndRefetch"

function* rootSaga() {
  yield takeEvery(FetchMoviesActionCreator, fetchMovies)
  yield takeEvery(SetPageAndRefetchActionCreator, setPageAndRefetch)
}

export default rootSaga
