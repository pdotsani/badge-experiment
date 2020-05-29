import React from "react";

import "./BadgeWithMeter.css";

import { toScorePct, returnRightPct } from "./helper";

const ProgressBar = require("progressbar.js");

class Badge extends React.Component {
  componentDidMount() {
    const { pctl, score, type, high, low } = this.props;
    let scorePct;

    if (type === "pctl") {
      scorePct = pctl;
    } else if (type === "score") {
      scorePct = toScorePct(score, high, low);
    }

    if (scorePct !== 1) {
      let path = new ProgressBar.Path(this.ref, {
        easing: "easeInOut",
        duration: 0,
      });
      path.set(0);
      path.animate(scorePct);
    }
  }

  render() {
    const { pctl, score, high, low, type } = this.props;
    return (
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
        <svg width="208" height="240">
          <path
            fill="#bdc3c7"
            d="M56.29165124598851 0L112.58330249197702 32.5L112.58330249197702 97.5L56.29165124598851 130L0 97.5L0 32.5Z"
          ></path>
        </svg>
        <svg x={13.5} y={14} style={{ overflow: "visible" }}>
          <defs>
            <linearGradient id="cls-standard" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#27ae60" />
              <stop offset="50%" stopColor="#27ae60" />
              <stop offset="100%" stopColor="#f1c40f" />
            </linearGradient>
            <linearGradient id="cls-low" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#e74c3c" />
              <stop offset="50%" stopColor="#f1c40f" />
            </linearGradient>
          </defs>
          <path
            id="path-standard"
            ref={(el) => {
              this.ref = el;
            }}
            stroke={
              returnRightPct(pctl, score, high, low, type) <= 0.35
                ? "url(#cls-low)"
                : "url(#cls-standard)"
            }
            fillOpacity="0"
            strokeWidth="24"
            strokeDashoffset={returnRightPct(pctl, score, high, low, type) === 1 ? "100" : ""}
            strokeDasharray={returnRightPct(pctl, score, high, low, type) === 1 ? "" : "300 300"}
            d="M43.30127018922193 0L86.60254037844386 25L86.60254037844386 75L43.30127018922193 100L0 75L0 25Z"
          ></path>
          <path
            fill="#2D4E8C"
            d="M43.30127018922193 0L86.60254037844386 25L86.60254037844386 75L43.30127018922193 100L0 75L0 25Z"
          ></path>
        </svg>
      </svg>
    );
  }
}

export default Badge;
