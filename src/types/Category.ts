import { movie } from "./movie";

export interface Category {
  id: number;
  name: string;
  movies: movie[] | [];
}
