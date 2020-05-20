import React from 'react';
import './BadgeWithMeter.css';

import Badge from './Badge.js'

import {suffix, writtenPctl, pctlOrScore} from './helper.js'

class BadgeWithMeter extends React.Component {
  render() {
    const { pctl, type, score, high, low} = this.props;
    return(
      <div className="BadgeWithMeter">
        <Badge 
          pctl={pctl} 
          score={score} 
          type={type}
          high={high}
          low={low}
          />
        <div className="BadgeWithMeter_percentile">
          {type === 'pctl' ? writtenPctl(pctl) : score}
          <span className="BadgeWithMeter_percentile_sufix">
            {type === 'pctl' ? suffix(pctl) : ""}
          </span>
        </div>
        <div className="BadgeWithMeter_label">
          {pctlOrScore(type)}
        </div>
      </div>
    )
  }
}

export default BadgeWithMeter;