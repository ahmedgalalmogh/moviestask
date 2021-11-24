import { Category } from "../types/Category";
import * as actionTypes from "./actionTypes";
import jsonDate from "../data/movies-data.json";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState: Category[] = jsonDate.categories; //load data.json as an  intial state
export const counterSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory: (
      categories,
      action: PayloadAction<actionTypes.CategoryPayload>
    ) => {
      const lastItemId = categories[categories.length - 1].id;
      const newCategory = {
        id: lastItemId + 1, // add new id
        ...action.payload,
      };
      categories = [...categories, newCategory];
      return categories;
    },
    addMovie: (
      categories,
      action: PayloadAction<actionTypes.AddMoviePayload>
    ) => {
      const selectedCategoryIndex = categories.findIndex(
        //find selected category to add movie in it
        (category) => category.id === action.payload.categoryId
      );
      const newMovieId =
        categories[selectedCategoryIndex].movies.length > 0 //check if category has no movies it genetate an id else  increment last id
          ? categories[selectedCategoryIndex].movies[
              categories[selectedCategoryIndex].movies.length - 1
            ].id + 1
          : Math.random();
      const newMovie = {
        id: newMovieId,
        ...action.payload.movie,
      };
      categories[selectedCategoryIndex].movies = [
        ...categories[selectedCategoryIndex].movies,
        newMovie,
      ];
    },

    editMovie: (
      categories,
      action: PayloadAction<actionTypes.editMoviePayload>
    ) => {
      const categoryIndex = categories.findIndex(
        (item) => item.id === action.payload.categoryId
      );
      const movieIndex = categories[categoryIndex].movies.findIndex(
        (item) => item.id === action.payload.movie.id
      );
      categories[categoryIndex].movies[movieIndex] = {
        ...categories[categoryIndex].movies[movieIndex],
        name: action.payload.movie.name,
        description: action.payload.movie.description,
      };

      return categories;
    },

    deleteMovie: (
      categories,
      action: PayloadAction<actionTypes.DeleteMoviePayload>
    ) => {
      const categoryIndex = categories.findIndex(
        (item) => item.id === action.payload.categoryId
      );

      categories[categoryIndex].movies = categories[
        categoryIndex
      ].movies.filter((movie) => movie.id !== action.payload.movieId);

      return categories;
    },
  },
});

export const { addMovie, addCategory, editMovie, deleteMovie } =
  counterSlice.actions;

export default counterSlice.reducer;
