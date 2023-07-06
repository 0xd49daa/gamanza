import { put } from "redux-saga/effects"
import {
  FetchMoviesActionCreator,
  SetPageSizeAndRefetchActionCreator,
} from "../actions"

export default function* setPageSizeAndRefetch(
  action: ReturnType<typeof SetPageSizeAndRefetchActionCreator>
) {
  yield put(FetchMoviesActionCreator({ pageSize: action.payload }))
}
