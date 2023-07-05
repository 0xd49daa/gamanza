import { put } from "redux-saga/effects"
import {
  FetchMoviesActionCreator,
  SetPageActionCreator,
  SetPageAndRefetchActionCreator,
} from "../actions"

export default function* setPageAndRefetch(
  action: ReturnType<typeof SetPageAndRefetchActionCreator>
) {
  yield put(SetPageActionCreator(action.payload))
  yield put(FetchMoviesActionCreator({ page: action.payload }))
}
