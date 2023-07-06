import { takeEvery } from "redux-saga/effects"
import fetchMovies from "./fetchMovies"
import {
  FetchMoviesActionCreator,
  SetPageAndRefetchActionCreator,
  SetPageSizeAndRefetchActionCreator,
} from "../actions"
import setPageAndRefetch from "./setPageAndRefetch"
import setPageSizeAndRefetch from "./setPageSizeAndRefetch"

function* rootSaga() {
  yield takeEvery(FetchMoviesActionCreator, fetchMovies)
  yield takeEvery(SetPageAndRefetchActionCreator, setPageAndRefetch)
  yield takeEvery(SetPageSizeAndRefetchActionCreator, setPageSizeAndRefetch)
}

export default rootSaga
