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
      <button>Watch Trailer</button>
        <div
          className="flex items-center justify-center"
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
    </div>
  );
};

MovieTrailer.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MovieTrailer;
