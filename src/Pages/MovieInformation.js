import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGetMovieByIDQuery } from "../services/TMDB";
import Star from "../components/Star";
import { selectGenreOrCategory } from "../Features/CurrentGenresOrCategories";
import { FaEarthAmericas } from "react-icons/fa6";
import { MdMovie } from "react-icons/md";
import PropTypes from "prop-types";
import YouTube from "react-youtube";
import { MdOutlineLocalMovies } from "react-icons/md";
import Recomendations from "../components/Recomendations";

const MovieInformation = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data, isFetching, error } = useGetMovieByIDQuery(id);

  if (!data) {
    return (
      <h1>
        No movies that match that variant
        <br />
        Please Search for Something else
      </h1>
    );
  } else {
    ("Not Found");
  }
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

  const options = {
    height: "800",
    width: "1200",
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };

  return (
    <>
      {" "}
      <div className="flex m-4 font-poppins text-[#e9e9e9] mt-[3rem]">
        <div className="ml-[2rem] w-[35%]">
          <img
            className="shadow-lg shadow-black rounded-xl w-[28rem] hover:scale-105 duration-100"
            src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
            alt={data.title}
          />
        </div>
        <div className="p-[1rem] w-[65%] mr-[1rem]">
          <h1 className="text-[2.5rem] font-bold">
            {data.original_title}{" "}
            <span>({data.release_date.split("-")[0]})</span>
          </h1>
          <h1 className="text-[1.1rem]">{data.tagline}</h1>
          <div className="py-1 flex gap-2 items-center">
            <Star stars={data.vote_average / 2} />
            <h1>{data.vote_average}/10</h1>
            <h1 className="font-medium ml-[15rem]">
              {data.runtime} min / Lang:{" "}
              <span className="ml-[.1rem]">
                {data?.spoken_languages.length > 0
                  ? data.spoken_languages[0].name
                  : ""}
              </span>
            </h1>
          </div>

          <div className="flex gap-x-4 text-[1.2rem] font-medium py-1">
            {data.genres.map((genre, i) => {
              return (
                <Link
                  key={genre.id}
                  to={"/"}
                  onClick={() => dispatch(selectGenreOrCategory(genre.id))}
                >
                  <p className="underline">{genre.name}</p>
                </Link>
              );
            })}
          </div>
          <h1 className="flex flex-col text-[1.5rem] font-bold py-2">
            Overview{" "}
            <span className="text-[1rem] font-thin">{data.overview}</span>
          </h1>

          <h1 className="flex flex-col text-[1.5rem] font-bold py-2">
            Top Cast
          </h1>
          <div className="flex flex-wrap gap-3 mt-2 ">
            {data.credits.cast
              .map((character, i) => {
                return (
                  <Link to={`/actors/${character.id}`} key={character.id}>
                    <div className="flex flex-col items-center">
                      {" "}
                      <img
                        className="w-[9rem] rounded-lg opacity-80 hover:opacity-100 duration-100"
                        src={`https://image.tmdb.org/t/p/w500/${character.profile_path}`}
                        alt="Cast Profile Pic"
                      />
                      <h1
                        className=""
                        style={{
                          maxWidth: "10rem",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {character.name}
                      </h1>
                    </div>
                  </Link>
                );
              })
              .slice(0, 6)}
          </div>

          <div className="flex gap-x-4 py-5 text-[1.2rem] font-bold items-center justify-center">
            <a
              className="bg-[#353535cc] p-2 rounded-lg hover:scale-105 duration-100 hover:bg-[#797979cc]"
              href={data.homepage}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className="flex items-center gap-x-2 ">
                <FaEarthAmericas className="text-[1.4rem] text-[#417dff]" />{" "}
                Website
              </h1>
            </a>

            <a
              className="bg-[#353535cc]  p-2 rounded-lg hover:scale-105 duration-100 hover:bg-[#797979cc]"
              href={`https://www.imdb.com/title/${data.imdb_id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className="flex items-center gap-x-2">
                <MdMovie className="text-[1.5rem] text-[#fff130]" />
                IMDB
              </h1>
            </a>

            <a
              className="bg-[#353535cc] p-2 rounded-lg hover:scale-105 duration-100 hover:bg-[#797979cc]"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className="flex items-center gap-x-2">
                {" "}
                <MdOutlineLocalMovies className="text-[1.5rem] text-[#ff5e5e]" />
                <div className="z-40">
                  <button onClick={ (event) => event.preventDefault()}>Watch Trailer</button>
                </div>
              </h1>
            </a>

            
          </div>
          <div className="flex items-center justify-center">
              {data.videos.results[0].key ? (
                <div className="relative">
                  <YouTube
                    videoId={data.videos.results[0].key}
                    options={options}
                    id="video"
                  />
                </div>
              ) : (
                "Video Not Found"
              )}
            </div>
        </div>
      </div>
      <Recomendations id={id} />
    </>
  );
};

export default MovieInformation;
