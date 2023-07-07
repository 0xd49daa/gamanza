export type Movie = {
  id: string
  primaryImage: {
    url: string
  }
  titleText: {
    text: string
  }
  titleType: {
    id: string
    isSeries: boolean
    isEpisode: boolean
  }
  releaseYear: {
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
}
