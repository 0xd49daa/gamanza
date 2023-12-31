import { createReducer } from "@reduxjs/toolkit"
import { State } from "./types.ts"
import {
  AddMoviesActionCreator,
  SetMoviesActionCreator,
  SetNextUrlActionCreator,
  SetErrorActionCreator,
  SetFieldActionCreator,
} from "./actions.ts"

const initialState = { movies: [], nextUrl: null, error: null, genres: null, types: null } as State

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
  builder.addCase(SetErrorActionCreator, (state, action) => {
    state.error = action.payload
  })
  builder.addCase(SetFieldActionCreator, (state, action) => {
    state[action.payload.field] = action.payload.value
  })
})

export default reducer
