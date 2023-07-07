import { createReducer } from "@reduxjs/toolkit"
import { State } from "./types.ts"
import {
  AddMoviesActionCreator,
  SetMoviesActionCreator,
  SetNextUrlActionCreator,
} from "./actions.ts"

const initialState = { movies: [], nextUrl: null } as State

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(AddMoviesActionCreator, (state, action) => {
    state.movies = [...state.movies, ...action.payload]
  })
  builder.addCase(SetMoviesActionCreator, (state, action) => {
    state.movies = action.payload
  })
  builder.addCase(SetNextUrlActionCreator, (state, action) => {
    state.nextUrl = action.payload
  })
})

export default reducer
