import React from "react";

function CInfo(props) {
  const fill = props.fill || "currentColor";
  const secondaryfill = props.secondaryfill || fill;
  const strokewidth = props.strokewidth || 1;
  const width = props.width || "24px";
  const height = props.height || "100%";

  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={secondaryfill} stroke={secondaryfill} strokeWidth="1.1">
        <circle
          cx="8"
          cy="8"
          fill="none"
          r="7.5"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="8" cy="4" r="1" stroke="none" />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          x1="8"
          x2="8"
          y1="12.5"
          y2="7"
        />
      </g>
    </svg>
  );
}

export default CInfo;
