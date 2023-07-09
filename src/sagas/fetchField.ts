import { FetchFieldActionCreator, SetErrorActionCreator, SetFieldActionCreator } from "../common/actions.js"
import { makeRequest } from "../common/utils.js"
import { call, put } from "redux-saga/effects"

const URLS = {
  genres: "/titles/utils/genres",
  types: "/titles/utils/titleTypes",
}

export default function* fetchField(action: ReturnType<typeof FetchFieldActionCreator>) {
  try {
    const result: (string | null)[] = yield call(makeRequest<unknown>, URLS[action.payload])
    yield put(SetFieldActionCreator({ field: action.payload, value: result }))
  } catch (e) {
    yield put(SetErrorActionCreator(e))
  }
}
