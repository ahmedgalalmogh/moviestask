import { Category } from "./../types/Category";
import { movie } from "./../types/movie";
export interface Action {
  type: string;
  payload: Category | movie | { catId: number; movieId: number };
}

export const ADD_CATEGORY = "ADD_CATEGORY";
export const ADD_MOVIE = "ADD_MOVIE";
export const EDIT_MOVIE = "EDIT_MOVIE";
export const REMOVE_MOVIE = "REMOVE_MOVIE";
