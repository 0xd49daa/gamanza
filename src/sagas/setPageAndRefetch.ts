import { put } from "redux-saga/effects"
import {
  FetchMoviesActionCreator,
  SetPageAndRefetchActionCreator,
} from "../actions"

export default function* setPageAndRefetch(
  action: ReturnType<typeof SetPageAndRefetchActionCreator>
) {
  yield put(FetchMoviesActionCreator({ page: action.payload }))
}
