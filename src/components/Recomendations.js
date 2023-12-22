import React from "react";
import { useGetMovieRecommendationsQuery } from "../services/TMDB";
import { Link } from "react-router-dom";
import Star from "./Star";
const Recomendations = (id) => {
  const { data, isFetching, error } = useGetMovieRecommendationsQuery(id.id);

  if (isFetching) {
    return <h1>................Loading</h1>;
  }

  if (error) {
    return (
      <Link to={"/"}>
        <h1>Something has gone wrong</h1>
      </Link>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center mt-[2rem]">
      <h1 className="text-[2.5rem] font-bold">Discover More</h1>

      <div className="flex flex-wrap gap-y-3 gap-x-5 items-center mt-3 justify-center">
        {data.results.map((movie, index) => (
          <div key={index} className="flex flex-col justify-center">
            <Link to={`/movie/${movie.id}`} className="hover:scale-105 duration-100">
              <img
                className="w-[15rem] rounded-xl hover:opacity-100 opacity-80 duration-100"
                alt={movie.title}
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : "https://www.fillmurray.com/200/300"
                }
              />
            </Link>
            <div className="p-1">
              <h1
                className=""
                style={{
                  maxWidth: "10rem",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {movie.title}
              </h1>
              <Star stars={movie.vote_average / 2} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recomendations;
