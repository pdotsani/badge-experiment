import React from 'react';
import './BadgeWithMeter.css';

import BadgeSm from './BadgeSm.js'

import {suffix, writtenPctl, pctlOrScore} from './helper.js'

class SmScoreWithMeter extends React.Component {
  render() {
    const { pctl, type, score, high, low} = this.props;
    return(
      <div className="SmScoreWithMeter">
        <BadgeSm 
          score={score} 
          high={high}
          low={low}
          />
        <div className="SmScoreWithMeter_score">
          {score}
        </div>
      </div>
    )
  }
}

export default SmScoreWithMeter;