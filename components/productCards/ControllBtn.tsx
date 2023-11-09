import React from "react";
import { useSwiper } from "swiper/react";

function ControlBtn() {
  const swiper = useSwiper();
  return (
    <div>
      <div className=" flex ml-7  mt-2 mb-5 gap-4">
        <button
          onClick={() => swiper.slideNext()}
          className="  text-black p-4  hover:bg-orange-200 transition rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        <button
          onClick={() => swiper.slidePrev()}
          className=" text-black p-4  hover:bg-orange-200 transition rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ControlBtn;
