// {
//   "results": {
//     "_id": "61e58526b597b91eb9423a1f",
//     "id": "tt0451272",
//     "primaryImage": {
//       "id": "rm3652042241",
//       "width": 2525,
//       "height": 3240,
//       "url": "https://m.media-amazon.com/images/M/MV5BNzVkYWQ1ZGQtNmEyZC00N2VjLTgxNzQtNDI2MDBmZDlhZGRlXkEyXkFqcGdeQXVyNTg0MzE1MjQ@._V1_.jpg",
//       "caption": {
//         "plainText": "Kim Bodnia in Nefarious (2022)",
//         "__typename": "Markdown"
//       },
//       "__typename": "Image"
//     },
//     "titleType": {
//       "text": "Movie",
//       "id": "movie",
//       "isSeries": false,
//       "isEpisode": false,
//       "categories": [
//         {
//           "value": "movie",
//           "__typename": "TitleTypeCategory"
//         }
//       ],
//       "canHaveEpisodes": false,
//       "__typename": "TitleType"
//     },
//     "titleText": {
//       "text": "Nefarious",
//       "__typename": "TitleText"
//     },
//     "originalTitleText": {
//       "text": "Nefarious",
//       "__typename": "TitleText"
//     },
//     "releaseYear": {
//       "year": 2022,
//       "endYear": null,
//       "__typename": "YearRange"
//     },
//     "releaseDate": {
//       "day": null,
//       "month": null,
//       "year": 2022,
//       "__typename": "ReleaseDate"
//     }
//   }
// }

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
  primaryImage: PrimaryImage | null
  titleText: {
    text: string
  }
  titleType: TitleType
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
