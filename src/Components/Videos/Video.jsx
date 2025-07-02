import React from "react";

const Video = () => {
  return (
    <div className="sm:mx-40 mb-2 mx-1 flex justify-center">
      <a href="https://youtu.be/Et2d_c-5KmQ?si=XIIsuXtBpOWUboO5" className="">
        <button className="inline-flex items-center px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium rounded-lg transition duration-200">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"
            alt=""
            className="w-16 mr-2"
          />
          Bizning manzilimiz
        </button>
      </a>
    </div>
  );
};

export default Video;
