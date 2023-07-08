import { useEffect, useState } from "react"
import { REQUEST_OPTIONS } from "../../../common/constants"
import { Movie } from "../../../common/types"
import { useDispatch } from "react-redux"
import { SetErrorActionCreator } from "../../../common/actions"

async function makeRequest(id: string) {
  const url = new URL(`/titles/${id}`, import.meta.env.VITE_API_URL)
  const response: Response = await fetch(url, REQUEST_OPTIONS)
  const result: { results: Movie } = await response.json()
  return result.results
}

export default function useMovie(id: string | undefined) {
  const [loading, setLoading] = useState(false)
  const [movie, setMovie] = useState<Movie | undefined>(undefined)
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchMovie() {
      try {
        if (id) {
          setLoading(true)
          setMovie(await makeRequest(id))
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
