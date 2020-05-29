import React from "react";

function getStrokeFill(pct) {
  if (pct > 70) {
    return "#53D6A6";
  } else if (pct > 50) {
    return "#FFD666";
  } else if (pct > 30) {
    return "#FFA150";
  } else {
    return "#EF5065";
  }
}

const BadgeCir = ({ pct }) => {
  const c = 2 * Math.PI * 47;
  const p = ((100 - pct) / 100) * c;
  return (
    <svg height="94px" width="94px" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle cx="57" cy="57" r="28.5" fill="none" stroke="#bdc3c7" strokeWidth="4" />
      <circle
        cx="-57" // Key attribute for starting meter from top
        cy="57"
        r="28.5"
        fill="none"
        stroke={getStrokeFill(pct)}
        strokeWidth="4"
        transform="rotate(-90)" // Key attribute for starting meter from top
        strokeDashoffset={p}
        strokeDasharray={c}
      />
    </svg>
  );
};

export default BadgeCir;
