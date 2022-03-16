export interface MoviesType extends ReadableStream<Uint8Array> {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
export interface FormatedMoviesType {
  name: string;
  yearOfRelease: string;
  rating: string;
  image: string;
}

export interface MoviesResponse {
  data: {
    Search: Array<MoviesType>;
    totalResults: string;
    Response: string;
    Error?: string;
  };
}
