import React from "react";

const CircleArrowDown = ({ width, height, stroke, strokeWidth }) => {
  return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
        <path d="M8 12l4 4" />
        <path d="M12 8v8" />
        <path d="M16 12l-4 4" />
    </svg>
  );
};

export default CircleArrowDown;
