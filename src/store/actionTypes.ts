import { Movie } from "../types/movies";
export interface AddMoviePayload {
  categoryId: number;
  movie: Omit<Movie, "id">;
}
export interface editMoviePayload {
  categoryId: number;
  movie: Omit<Movie, "rate">;
}
export interface DeleteMoviePayload {
  categoryId: number;
  movieId: number;
}
export interface CategoryPayload {
  name: string;
  movies: Movie[];
  description?: string;
}
