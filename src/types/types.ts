export interface MovieProps {
  page: number
  results: {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
    mediaType: string
    documentID: string
  }[]
  total_pages: number
  total_results: number
}

export interface CustomizedState {
  id: number
}

export interface DetailMovieProps {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  mediaType: string
  documentID: string
}

export interface SingleMovieProps {
  movie: {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
    mediaType: string
    documentID: string
  }
}

export interface GenresProps {
  genres: {
    id: number
    name: string
  }[]
}
