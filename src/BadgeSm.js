import React from 'react';

import './BadgeWithMeter.css';

import { toScorePct } from './helper';

const ProgressBar = require("progressbar.js");

class BadgeSm extends React.Component {
  componentDidMount() {
    const { score, type, high, low } = this.props;
    
    let scorePct = toScorePct(score, high, low);

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
    const { score, high, low } = this.props;
    return(
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" >
        <svg width="51.96" height="60">
          <path fill="#bdc3c7" d="M25.980762113533157 0L51.96152422706631 15L51.96152422706631 45L25.980762113533157 60L0 45L0 15Z">
          </path>
        </svg>
        <svg x={4.5} y={5} style={{ overflow: "visible" }}>
          <defs>
            <linearGradient id="cls-standard" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#27ae60"  />
              <stop offset="50%" stopColor="#27ae60"  />
              <stop offset="100%" stopColor="#f1c40f" />
            </linearGradient>
            <linearGradient id="cls-low" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#e74c3c"  />
              <stop offset="50%" stopColor="#f1c40f"  />
            </linearGradient>
          </defs>
          <path
            id="path-standard"
            ref={el => {this.ref = el}}
            stroke={toScorePct(score, high, low) <= .35 ? "url(#cls-low)" : "url(#cls-standard)"}
            fillOpacity="0"
            strokeWidth="10"
            strokeDashoffset={toScorePct(score, high, low) === 1 ? "100" : ""}
            strokeDasharray={toScorePct(score, high, low) === 1 ? "" : "300 300"}
            strokeDashoffset="0"
            d="M21.650635094610966 0L43.30127018922193 12.5L43.30127018922193 37.5L21.650635094610966 50L0 37.5L0 12.5Z">
          </path>
          <path 
            fill="white"
            d="M21.650635094610966 0L43.30127018922193 12.5L43.30127018922193 37.5L21.650635094610966 50L0 37.5L0 12.5Z">
          </path>
        </svg>
      </svg>  
    )
  }
}

export default BadgeSm;