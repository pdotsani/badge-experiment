import React from 'react';
import logo from './logo.svg';
import './App.css';

import BadgeWithMeter from './BadgeWithMeter.js'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <BadgeWithMeter pctl={0.8} type={'pctl'}/>
      </div>
    );
  }
}

export default App;
