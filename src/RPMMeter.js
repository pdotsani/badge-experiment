import React from 'react';
import './BadgeWithMeter.css';

import Badge from './Badge.js'

import {suffix, writtenPctl, pctlOrScore} from './helper.js'

class RPMMeter extends React.Component {
  render() {
    return(
      <div className="RPMMeter_container">
        <div className="RPMMeter_meter" />
      </div>
    )
  }
}

export default RPMMeter;