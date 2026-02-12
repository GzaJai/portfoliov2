import React from "react";

const UkFlag = ({ width, height }) => {
  return (
    <svg
    width={width}
    height={height}
    viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="clipCircle">
          <circle cx="32" cy="32" r="32" />
        </clipPath>
      </defs>

      <g clip-path="url(#clipCircle)">
        <rect width="64" height="64" fill="#012169" />

        <path d="M0 0 L64 64 M64 0 L0 64" stroke="#FFFFFF" stroke-width="10" />

        <path d="M0 0 L64 64 M64 0 L0 64" stroke="#C8102E" stroke-width="6" />

        <path d="M32 0 V64 M0 32 H64" stroke="#FFFFFF" stroke-width="14" />

        <path d="M32 0 V64 M0 32 H64" stroke="#C8102E" stroke-width="8" />
      </g>
    </svg>
  );
};

export default UkFlag;
