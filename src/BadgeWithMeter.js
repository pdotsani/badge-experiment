import React from 'react';
import './BadgeWithMeter.css';

import Badge from './Badge.js'

import {suffix, writtenPctl, pctlOrScore} from './helper.js'

class BadgeWithMeter extends React.Component {
  render() {
    const { pctl, type } = this.props;
    return(
      <div className="BadgeWithMeter">
        <Badge pctl={pctl}/>
        <div className="BadgeWithMeter_percentile">
          {writtenPctl(pctl)}
          <span className="BadgeWithMeter_percentile_sufix">{suffix(pctl)}</span>
        </div>
        <div className="BadgeWithMeter_label">
          {pctlOrScore(type)}
        </div>
      </div>
    )
  }
}

export default BadgeWithMeter;