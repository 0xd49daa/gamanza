export type Movie = {
  id: string;
  primaryImage: {
    url: string;
  };
  titleText: {
    text: string;
  };
  releaseYear: {
    year: number;
  };
};

export type FetchMoviesResponse = {
  page: number;
  next: string;
  entries: number;
  results: Movie[];
};

export type State = {
  page: number;
  pageSize: number;
  movies: Movie[];
};
