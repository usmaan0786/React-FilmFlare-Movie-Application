import React from "react";
import { useParams } from "react-router-dom";
import {
  useGetActorDetailsQuery,
  useGetMoviesByActorIdQuery,
} from "../services/TMDB";
import { Link } from "react-router-dom";
import Star from "../components/Star";

const Actors = () => {
  let page = 1;
  const { id } = useParams();

  const { data, isFetching, error } = useGetActorDetailsQuery(id);
  const { data: movies } = useGetMoviesByActorIdQuery(id, page);

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
    <>
      <div className="flex m-4 font-poppins text-[#e9e9e9] mt-[3rem]">
        <div className="ml-[1rem] w-[30%] flex items-center justify-center">
          <img
            className="rounded-xl w-[20rem]"
            src={`https://image.tmdb.org/t/p/w500/${data.profile_path}`}
            alt={data.title}
          />
        </div>
        <div className="p-[1rem] w-[70%]">
          <h1 className="text-[2rem] font-bold">{data.name}</h1>
          <h1 className="text-[1.1rem] my-1">
            Born in {data.birthday.split("-")[0]}
          </h1>
          <h1 className="text-[1.1rem] overflow-scroll my-2 h-[25rem] italic">
            {data.biography}{" "}
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-[2rem]">
        <h1 className="text-[1.7rem] font-bold">
          Results for <span className="text-[#ff0000]">{data.name}</span>
        </h1>

        <div className="flex flex-wrap gap-y-6 gap-x-6 items-center mt-3 justify-center">
          {movies.results
            .map((movie, index) => (
              <div key={index} className="flex flex-col justify-center hover:scale-105 duration-200 opacity-80 hover:opacity-100 hover:border-2 border-[#fffc] rounded-xl">
                <Link to={`/movie/${movie.id}`} className="">
                  <img
                    className="w-[15rem] rounded-xl"
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
            ))
            .slice(0, 12)}
        </div>
      </div>
    </>
  );
};

export default Actors;
