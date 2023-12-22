import React, { useState } from "react";
import PropTypes from "prop-types";
import YouTube from "react-youtube";

const MovieTrailer = ({ data }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const options = {
    height: "800",
    width: "1200",
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };

  return (
    <div className="z-40">
      <button onClick={handleClick}>Watch Trailer</button>

      {open && (
        <div
          className="fixed top-0 left-0 h-full w-full flex items-center justify-center bg-[#3b3b3bcc z-50 "
          onClick={handleClick}
        >
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
      )}
    </div>
  );
};

MovieTrailer.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MovieTrailer;
