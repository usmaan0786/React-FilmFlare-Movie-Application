import React from "react";
import { Link } from "react-router-dom";

const FeaturedMovie = (movie) => {
  const featuredMovie = movie.data;
  console.log(featuredMovie);
  return (
    <Link to={`/movie/${featuredMovie.id}`} className="flex mx-[2rem] my-[1rem] justify-center ">
      <div className="flex justify-center w-[100%] flex-col relative">
        <img
          className="h-[25rem]  w-[100%] rounded-md opacity-50  duration-100 "
          alt={featuredMovie.title}
          src={
            featuredMovie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${featuredMovie.backdrop_path}`
              : "https://www.fillmurray.com/200/300"
          }
        />
        <div className="absolute z-20 text-[#fffc] bottom-0 mb-[1rem] px-[2rem]">
            <h1 className="text-[3rem] font-bold">{featuredMovie.title}</h1>
            <h1 className="">{featuredMovie.overview}</h1>
        </div>
      </div>


    </Link>
  );
};

export default FeaturedMovie;
