  import { createSlice } from "@reduxjs/toolkit";

  export const GenresOrCategory = createSlice({
    name: "genreOrCategory",
    initialState: {
      genreOrCategoryName: "",
      Page: 1,
      searchQuery: "",
    },
    reducers: {
      selectGenreOrCategory: (state, action) => {
        state.genreOrCategoryName = action.payload;
        state.searchQuery = '';
      }, 

      searchMovie : (state, action) => {
        state.searchQuery = action.payload;
      }
    },
  });

  export const { selectGenreOrCategory, searchMovie } = GenresOrCategory.actions;

  export default GenresOrCategory.reducer;