export type Episode = {
  tconst: string
  seasonNumber: number | "\\N"
  episodeNumber: number | "\\N"
}

type PrimaryImage = {
  url: string
  caption?: {
    plainText?: string
  }
}

type TitleType = {
  id: string
  text: string
  isSeries: boolean
  isEpisode: boolean
}

export type Movie = {
  id: string
  primaryImage?: PrimaryImage
  titleText?: {
    text: string
  }
  titleType?: TitleType
  releaseYear?: {
    year: number
  }
}

export type FetchMoviesResponse = {
  page: number
  next: string
  entries: number
  results: Movie[]
}

export type State = {
  movies: Movie[]
  nextUrl: string | null
  error: unknown
  genres: (string | null)[] | null
  types: (string | null)[] | null
}

export type LoadField = "genres" | "types"

export type Seasons = {
  [key: string]: number
}
