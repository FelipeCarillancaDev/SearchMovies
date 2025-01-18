export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MovieRequest {
  title: string;
  year: string;
  genre: string[];
  director: string;
  synopsis: string;
  average_rating: number;
}


export interface Result {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: OriginalLanguage;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export enum OriginalLanguage {
  En = "en",
  Es = "es",
  LV = "lv",
  Zh = "zh",
}

export interface Genres {
  genres: Genre[];
}

export interface Genre {
  id: number;
  name: string;
}
