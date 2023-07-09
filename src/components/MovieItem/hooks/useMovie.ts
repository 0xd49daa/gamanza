import { useEffect, useState } from "react"
import { REQUEST_OPTIONS } from "../../../common/constants"
import { Movie, Episode } from "../../../common/types"
import { useDispatch } from "react-redux"
import { SetErrorActionCreator } from "../../../common/actions"

async function makeRequest<T>(urlPart: string): Promise<T> {
  const url = new URL(urlPart, import.meta.env.VITE_API_URL)
  const response: Response = await fetch(url, REQUEST_OPTIONS)
  const result = await response.json()
  return result.results as T
}

type Seasons = {
  [key: string]: number
}

type ExtendedMovie = Movie & { seasons: Seasons | null }

export default function useMovie(id: string | undefined) {
  const [loading, setLoading] = useState(false)
  const [movie, setMovie] = useState<ExtendedMovie | undefined>(undefined)
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchMovie() {
      try {
        if (id) {
          setLoading(true)
          const movie = await makeRequest<Movie>(`/titles/${id}`)
          let seasons = null

          if (movie.titleType.isSeries) {
            const episodes = await makeRequest<Episode[]>(`/titles/series/${id}`)

            seasons = episodes.reduce((acc, episode) => {
              const seasonNumber = episode.seasonNumber.toString() as string
              acc[seasonNumber] = (acc[seasonNumber] ?? 0) + 1
              return acc
            }, {} as Seasons)
          }
          setMovie({
            ...movie,
            seasons: seasons || null,
          })
          setLoading(false)
        }
      } catch (error) {
        setLoading(false)
        dispatch(SetErrorActionCreator(error))
      }
    }

    fetchMovie()
  }, [id])

  return { movie, loading }
}
