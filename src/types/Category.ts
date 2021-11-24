import { Movie } from "./movies";
export interface Category {
  id: number;
  name: string;
  movies: Movie[];
  description?: string;
}
