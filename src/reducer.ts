import { createReducer } from "@reduxjs/toolkit"
import { State } from "./types"
import {
  AddMoviesActionCreator,
  SetMoviesActionCreator,
  SetPageActionCreator,
  SetPageSizeActionCreator,
} from "./actions"

const initialState = { page: 1, pageSize: 10, movies: [] } as State

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(AddMoviesActionCreator, (state, action) => {
    state.movies = [...state.movies, ...action.payload]
  })
  builder.addCase(SetMoviesActionCreator, (state, action) => {
    state.movies = action.payload
  })
  builder.addCase(SetPageActionCreator, (state, action) => {
    state.page = action.payload
  })
  builder.addCase(SetPageSizeActionCreator, (state, action) => {
    state.pageSize = action.payload
  })
})

export default reducer
