import React from "react";

export const Tiktok = ({ height = "18", width = "18", ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 14 14" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.422 9.717V1.141m0 8.58a2.893 2.893 0 1 1-2.893-2.893M8.422 1.14a4.288 4.288 0 0 0 4.288 4.29"
      />
    </svg>
  );
};
