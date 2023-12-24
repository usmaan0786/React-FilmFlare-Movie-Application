import React from "react";
import { Link } from "react-router-dom";
import Star from "./Star";

const Movie = (movie) => {
  const data = movie.movie;

  return (
    <div className="flex flex-wrap gap-y-6 gap-x-6 items-center mt-3 justify-center h-max ">
      {data.results.map((movie, index) => (
        <div key={index} className="flex flex-col justify-center hover:scale-105 duration-200 opacity-80 hover:opacity-100 hover:border-2 border-[#fffc] rounded-xl">
          <Link to={`/movie/${movie.id}`} className="">
            <img
              className="w-[15rem] rounded-xl duration-100" 
              alt={movie.title}
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : "https://www.fillmurray.com/200/300"
              }
            />
          </Link>
          <div className="p-1">
            <Star className = "" stars={movie.vote_average / 2} />
            <h1
              className="my-1"
              style={{
                maxWidth: "10rem",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {movie.title}
            </h1>
          </div>
        </div>
      )).slice(0, 18)}
    </div>
  );
};

export default Movie;
