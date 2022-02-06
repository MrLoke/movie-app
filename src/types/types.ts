export interface ResultsMovieTypes {
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

export interface MovieTypes {
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

export interface SingleMovieTypes {
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

export interface AddMovieTypes {
  title: string
  id: number
  poster_path: string
  vote_average: number
  release_date: string
  popularity: number
  overview: string
}

export interface DetailMovieTypes {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: {
    backdrop_path: string
    id: number
    name: string
    poster_path: string
  }
  budget: number
  genres: {
    id: number
    name: string
  }[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: {
    id: number
    logo_path: string | null
    name: string
    origin_country: string
  }[]
  production_countries: {
    iso_3166_1: string
    name: string
  }[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: {
    english_name: string
    iso_639_1: string
    name: string
  }[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface DetailMovieProps {
  movie: {
    adult: boolean
    backdrop_path: string
    belongs_to_collection: {
      backdrop_path: string
      id: number
      name: string
      poster_path: string
    }
    budget: number
    genres: {
      id: number
      name: string
    }[]
    homepage: string
    id: number
    imdb_id: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: {
      id: number
      logo_path: string | null
      name: string
      origin_country: string
    }[]
    production_countries: {
      iso_3166_1: string
      name: string
    }[]
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: {
      english_name: string
      iso_639_1: string
      name: string
    }[]
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
  }
}
