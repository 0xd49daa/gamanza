import { List } from "@mui/material"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { FetchMoviesActionCreator } from "../../common/actions.ts"
import MovieListItem from "./MovieListItem"
import Paginator from "../Paginator/Paginator.tsx"
import SearchPanel from "../SearchPanel/SearchPanel"
import usePageParams from "./hooks/usePageParams.ts"
import usePageNavigation from "../../common/hooks/usePageNavigation.ts"
import useMovies from "./hooks/useMovies.ts"

function MoviesList() {
  const dispatch = useDispatch()

  const { page: _page, pageSize: _pageSize, genre, type, year } = usePageParams()
  const page = parseInt(_page)
  const pageSize = parseInt(_pageSize)

  const navigateWithLogic = usePageNavigation()
  const { movies, totalItems, hasNextPage } = useMovies(page, pageSize)

  useEffect(() => {
    dispatch(FetchMoviesActionCreator({ page, pageSize, genre, type, year }))
  }, [dispatch, page, pageSize, genre, type, year])

  return (
    <>
      <SearchPanel />
      <List>
        {movies.map((movie) => {
          return <MovieListItem key={movie.id} movie={movie} />
        })}
      </List>
      <Paginator
        page={page}
        pageSize={pageSize}
        totalItems={totalItems}
        hasNextPage={hasNextPage}
        onPageChange={(page) => navigateWithLogic({ page })}
        onRowsPerPageChange={(pageSize) => navigateWithLogic({ pageSize, page: "1" })}
      />
    </>
  )
}

export default MoviesList
