import React, { useEffect, useState } from "react";
import { useGetMoviesQuery } from "../services/TMDB";
import Movie from "../components/Movie";
import { useSelector } from "react-redux";
import Pagination from "../components/Pagination";
import FeaturedMovie from "../components/FeaturedMovie";
import Search from "../components/Search";
const Movies = () => {
  const [Page, setPage] = useState(1);
  const { genreOrCategoryName, searchQuery } = useSelector(
    (state) => state.currentGenreOrCategory
  );

  const { data, isFetching, error } = useGetMoviesQuery({
    genreOrCategoryName,
    Page,
    searchQuery,
  });

  if (isFetching) {
    return <h1>................Loading</h1>;
  }

  if (!data.results.length) {
    return (
      <h1>
        No movies that match that variant
        <br />
        Please Search for Something else
      </h1>
    );
  }

  if (error) {
    return "An Error has Occured";
  }

  return (
    <div className="mb-[1rem]">
    <Search />
      <FeaturedMovie data={data.results[1]} />
      <Movie movie={data} />
      <Pagination
        currentPage={Page}
        totalPages={data.total_pages}
        setPage={setPage}
      />
    </div>
  );
};

export default Movies;
