import { List } from "@mui/material"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FetchMoviesActionCreator } from "../../actions"
import { getMoviesPage } from "../../selectors"
import MovieListItem from "./MovieListItem"
import Paginator from "./Paginator"

function MoviesList() {
  const dispatch = useDispatch()
  const movies = useSelector(getMoviesPage)

  useEffect(() => {
    dispatch(FetchMoviesActionCreator())
  }, [])

  return (
    <>
      <List>
        {movies.map((movie) => {
          return <MovieListItem key={movie.id} movie={movie} />
        })}
      </List>
      <Paginator />
    </>
  )
}

export default MoviesList
