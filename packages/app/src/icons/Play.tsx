import React from "react";

const Play = ({ fill = false, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fill ? "currentColor" : "none"}
    stroke={fill ? "none" : "currentColor"}
    strokeWidth={fill ? 0 : 1}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
);

export default Play;
