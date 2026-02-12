import React from "react";

const ArgentinaFlag = ({ width, height }) => {
  return (
    <svg
        viewBox="0 0 64 64"
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
    >
    <defs>
        <clipPath id="circleClip">
        <circle cx="32" cy="32" r="32" />
        </clipPath>
    </defs>

    <g clip-path="url(#circleClip)">
        <rect width="64" height="64" fill="#74ACDF" />
        <rect y="21.33" width="64" height="21.33" fill="#FFFFFF" />
        <circle cx="32" cy="32" r="6" fill="#F6B40E" />
    </g>
    </svg>
  );
};



export default ArgentinaFlag;
