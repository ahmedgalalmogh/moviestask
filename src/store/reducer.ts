import { Category } from "../types/Category";
import { Action } from "./actionTypes";
import * as actionTypes from "./actionTypes";
import { StateType } from "./../types/State";
import { movie } from "./../types/movie";
import jsonDate from "../data/movies-data.json";
const initialState: StateType = jsonDate;
const reducer = (
  state: StateType = initialState,
  action: Action
): StateType => {
  // switch (action.type) {
  //   case actionTypes.ADD_CATEGORY:
  //     const newCategory: Category = {
  //       id: Math.random(),
  //       name: action.payload?.,
  //       movies: [],
  //     };
  //     return {
  //       ...state,
  //       categories: [...state.categories, newCategory],
  //     };
  // //   case actionTypes.REMOVE_MOVIE:
  // //   var payload:{catId:number,movieId:number}=action.payload.;
  // //   const updatedMovies: movie[] = currentCategory.movies.filter(
  // //            (item) => item.id !== currentCategory.movies[0].id
  // //          );

  // //     // const updatedCategories = state.categories.map((item) =>
  // //     // {
  // //     //   if (item.id == action.payload.id) {
  // //     //     const updatedMovies: movie[] = item.movies.filter(
  // //     //       (item) => item.id !== action.payload.id
  // //     //     );
  // //     //     item.movies =updatedMovies;
  // //     //   }
  // //     // });
  // //     return {
  // //       ...state,
  // //       categories: updatedCategories,
  // //     };
  // //     };
  // // }
  return state;
};

export default reducer;
