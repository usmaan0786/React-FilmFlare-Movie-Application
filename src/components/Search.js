import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

import { searchMovie } from "../Features/CurrentGenresOrCategories";
const Search = () => {
  const [query, SetQuery] = useState("");

  const dispatch = useDispatch();
  const handleKeyPress = (event) => {
    if (event.key == "Enter") {
      dispatch(searchMovie(query));
    }
  };

  return (
    <div className="flex items-center absolute top-4 ml-[37rem]">
      <input
        type="text"
        className="border-[.1rem] w-[25rem] p-2 rounded-md focus:outline-none focus:border-[#ffffff] text-[#161616] text-[.9rem]"
        placeholder="Enter your text"
        onKeyDown={handleKeyPress}
        onChange={(e) => SetQuery(e.target.value)}
      />
      <BsSearch
        className="text-[1.5rem] m-1 absolute text-[#161616] ml-[23rem] "
      />
    </div>
  );
};

export default Search;
