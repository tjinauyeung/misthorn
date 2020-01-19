import React from "react";

const Pause = ({ fill = false, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fill ? "currentColor": "none"}
    stroke={fill ? "none" : "currentColor"}
    strokeWidth={fill ? 0 : 1}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="6" y="4" width="4" height="16"></rect>
    <rect x="14" y="4" width="4" height="16"></rect>
  </svg>
);

export default Pause;
