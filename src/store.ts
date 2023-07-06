import { configureStore } from "@reduxjs/toolkit"

import rootReducer from "./reducer"

import createSagaMiddleware from "redux-saga"

import rootSaga from "./sagas/sagas"

import logger from "redux-logger"

const sagaMiddleware = createSagaMiddleware()

const devMiddleware = import.meta.env.DEV ? [logger] : []

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, ...devMiddleware],
})

sagaMiddleware.run(rootSaga)

export default store
