import { createReducer } from "@reduxjs/toolkit"
import { State } from "./types"
import {
  AddMoviesActionCreator,
  SetMoviesActionCreator,
  SetNextUrlActionCreator,
  SetPageActionCreator,
  SetPageSizeActionCreator,
} from "./actions"

const initialState = { page: 1, pageSize: 10, movies: [], nextUrl: null } as State

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
  builder.addCase(SetNextUrlActionCreator, (state, action) => {
    state.nextUrl = action.payload
  })
})

export default reducer
