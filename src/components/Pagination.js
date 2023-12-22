import React from "react";
import PropTypes from "prop-types";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const Pagination = ({ currentPage, totalPages, setPage }) => {

  if (totalPages === 0) {
    return null;
  }

  const handleNext = () => {
    if (currentPage !== totalPages) {
      setPage(currentPage + 1);
    } else {
      return null;
    }
  };

  const handlePrev = () => {
    if (currentPage !== 1) {
      setPage(currentPage - 1);
    } else {
      return null;
    }
  };

  return (
    <div className="flex items-center justify-center gap-x-2 mt-[1rem] ">
      <GrFormPrevious
        className="bg-[#0051ff] text-[2rem] text-white rounded-full hover:scale-125 duration-100 "
        onClick={handlePrev}
      />
      <button className="text-[1.3rem] font-medium mx-1">{currentPage}</button>
      <MdOutlineNavigateNext
        className="bg-[#0051ff] text-[2rem] text-white rounded-full hover:scale-125 duration-100"
        onClick={handleNext}
      />
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default Pagination;
