import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SetErrorActionCreator } from "../../../common/actions"
import { getMovie } from "../../../common/selectors"
import { Episode, Movie, Seasons } from "../../../common/types"
import { makeRequest } from "../../../common/utils"

type ExtendedMovie = Movie & { seasons?: Seasons }

export default function useMovie(id: string | undefined) {
  const [loading, setLoading] = useState(false)
  const [movie, setMovie] = useState<ExtendedMovie | undefined>(undefined)
  const dispatch = useDispatch()

  const cachedMovie = useSelector(getMovie(id))

  useEffect(() => {
    async function fetchMovie() {
      try {
        if (id) {
          setLoading(true)
          dispatch(SetErrorActionCreator(null))

          const movie = cachedMovie ?? (await makeRequest<Movie>(`/titles/${id}`))
          let seasons

          if (movie.titleType?.isSeries) {
            const episodes = await makeRequest<Episode[]>(`/titles/series/${id}`)

            seasons = episodes.reduce((acc, episode) => {
              const seasonNumber = episode.seasonNumber.toString() as string
              acc[seasonNumber] = (acc[seasonNumber] ?? 0) + 1
              return acc
            }, {} as Seasons)
          }
          setMovie({
            ...movie,
            seasons,
          })
          setLoading(false)
        }
      } catch (error) {
        setLoading(false)
        dispatch(SetErrorActionCreator(error))
      }
    }

    fetchMovie()
  }, [cachedMovie, id])

  return { movie, loading }
}
