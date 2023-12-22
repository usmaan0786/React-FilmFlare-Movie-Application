import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../Images/logo.png";
import { useGetGenresQuery } from "../services/TMDB";
import { useDispatch, useSelector } from "react-redux";
import { selectGenreOrCategory } from "../Features/CurrentGenresOrCategories";
const Sidebar = () => {
  const dispatch = useDispatch();

  const { data, isFetching } = useGetGenresQuery();

  const categories = [
    { label: "Popular", value: "popular" },
    { label: "Top Rated", value: "top_rated" },
    { label: "Upcoming", value: "upcoming" },
  ];

  if (isFetching) {
    return <h1>.....Loading</h1>;
  }

  return (
    <div className="flex">
      <div className="text-[#fff] flex-none border-solid  border-[#3586ff] border-r-[.1rem] border-b z-10 w-[17rem] bg-[#161616] p-2 flex-col justify-center h-max">
        <Link to={"/"}>
          <div className="flex items-center justify-center">
            <img className="w-[10rem]" src={logoImage} alt="logo" />
          </div>
        </Link>

        <hr className="border-[#9e27ff] mt-2" />
        <div className="p-4 pt-2 pl-6">
          <h1 className=" text-[#ff6464] text-[.9rem] italic">categories</h1>
          {categories.map((category, value) => (
            <Link
              key={value}
              to={"/"}
              onClick={() => dispatch(selectGenreOrCategory(category.value))}
            >
              <p className= "w-max py-3 text-[1rem] font-medium hover:text-[#3586ff] hover:text-[1.1rem] scale-105 duration-100">{category.label}</p>
            </Link>
          ))}
        </div>

        <hr className="border-[#9e27ff]" />
        <div className="p-4 pl-6">
          <h1 className="text-[#ff6464] text-[.9rem] italic">Genres</h1>
          {data.genres.map((label, value) => (
            <Link
              key={value}
              to={"/"}
              onClick={() => dispatch(selectGenreOrCategory(label.id))}
            >
              <p className="w-max py-3 text-[1rem] font-medium hover:text-[#3586ff] hover:text-[1.1rem] scale-105 duration-100">{label.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
