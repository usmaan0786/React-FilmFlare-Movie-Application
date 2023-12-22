import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

// const tmdbApiKey = process.env.REACT_APP_TMDM_KEY;
const tmdbApiKey = "740df7635c943802f283109861260c94";
export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  // Get Movies
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: ({ genreOrCategoryName, Page, searchQuery }) => {
        // Get Movies By Search
        if (searchQuery) {
          return `/search/movie?query=${searchQuery}&page=${Page}&api_key=${tmdbApiKey}`;
        }

        // get movies by category
        if (genreOrCategoryName && typeof genreOrCategoryName === "string") {
          return `movie/${genreOrCategoryName}?page=${Page}&api_key=${tmdbApiKey}`;
        }
        // get movies by genre
        if (genreOrCategoryName && typeof genreOrCategoryName === "number") {
          return `discover/movie?with_genres=${genreOrCategoryName}&page=${Page}&api_key=${tmdbApiKey}`;
        }
        //Get Popular movies by default
        return `movie/popular?page=${Page}&api_key=${tmdbApiKey}`;
      },
    }),

    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=740df7635c943802f283109861260c94`,
    }),

    getMovieByID: builder.query({
      query: (id) => {
        return `movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`;
      },
    }),

    getMovieRecommendations: builder.query({
      query: (movie_id) => {
        return `movie/${movie_id}/recommendations?api_key=${tmdbApiKey}`;
      },
    }),

    getActorDetails: builder.query({
      query: (id) => {
        return `person/${id}?api_key=${tmdbApiKey}`;
      },
    }),

    getMoviesByActorId: builder.query({
      query: (id, page) => {
        return `/discover/movie?with_cast=${id}&page=${page}&api_key=${tmdbApiKey}`;
      },
    }),
  }),
});

export const {
  useGetGenresQuery,
  useGetMoviesQuery,
  useGetMovieByIDQuery,
  useGetMovieRecommendationsQuery,
  useGetActorDetailsQuery,
  useGetMoviesByActorIdQuery
} = tmdbApi;
