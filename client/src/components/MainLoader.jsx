import React from "react";
// import "../assets/css/Loader.css";
import { ColorRing } from "react-loader-spinner";

const MainLoader = () => {
  return (
    <div className="flex items-center justify-center container">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
      {/* <svg width="100" height="100" viewBox="0 0 300 300">
        <defs>
          <linearGradient
            id="gradient-fill"
            gradientUnits="userSpaceOnUse" // Corrected value
            x1="0"
            y1="300"
            x2="300"
            y2="0"
          >
            <stop offset="0%">
              <animate
                attributeName="stop-color"
                values="#00E06B;#CB0255;#00E06B"
                dur="5s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%">
              <animate
                attributeName="stop-color"
                values="#04AFC8;#8904C5;#04AFC8"
                dur="8s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>

          <clipPath id="clip">
            <rect
              className="square s1"
              x="0"
              y="0"
              rx="12"
              ry="12"
              height="90"
              width="90"
            ></rect>
            <rect
              className="square s2"
              x="100"
              y="0"
              rx="12"
              ry="12"
              height="90"
              width="90"
            ></rect>
            <rect
              className="square s3"
              x="200"
              y="0"
              rx="12"
              ry="12"
              height="90"
              width="90"
            ></rect>
            <rect
              className="square s4"
              x="0"
              y="100"
              rx="12"
              ry="12"
              height="90"
              width="90"
            ></rect>

            
            <rect
              className="square s5"
              x="200"
              y="100"
              rx="12"
              ry="12"
              height="90"
              width="90"
            ></rect>
            <rect
              className="square s6"
              x="0"
              y="200"
              rx="12"
              ry="12"
              height="90"
              width="90"
            ></rect>
            <rect
              className="square s7"
              x="100"
              y="200"
              rx="12"
              ry="12"
              height="90"
              width="90"
            ></rect>
          </clipPath>
        </defs>
        <rect
          className="gradient"
          clipPath="url('#clip')"
          height="300"
          width="300"
        ></rect>
      </svg> */}
    </div>
  );
};

export default MainLoader;
