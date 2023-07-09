import { useSelector } from "react-redux"
import { getMovies, getNextUrl } from "../../../common/selectors.ts"
import { useMemo } from "react"

export default function useMovies(page: number, pageSize: number) {
  const allMovies = useSelector(getMovies)
  const nextUrl = useSelector(getNextUrl)

  const movies = useMemo(() => {
    return allMovies.slice((page - 1) * pageSize, page * pageSize)
  }, [allMovies, page, pageSize])

  return { movies, totalItems: allMovies.length, hasNextPage: !!nextUrl }
}
