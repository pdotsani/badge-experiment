import React from 'react';
import logo from './logo.svg';
import './App.css';

import BadgeWithMeter from './BadgeWithMeter.js';
import SmScoreWithMeter from './SmScoreWithMeter.js';
import RPMMeter from './RPMMeter.js';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <BadgeWithMeter pctl={0.89} type={'pctl'}/>
        <BadgeWithMeter pctl={0.32} type={'pctl'}/>
        <BadgeWithMeter pctl={0.65} type={'pctl'}/>
        <BadgeWithMeter pctl={1} type={'pctl'}/>
        <BadgeWithMeter 
          score={900} 
          high={1000} 
          low={400} 
          pctl={0.89} 
          type={'score'}/>
        <BadgeWithMeter 
          score={745} 
          high={1000} 
          low={400} 
          pctl={0.32} 
          type={'score'}/>
        <BadgeWithMeter 
          score={560} 
          high={1000} 
          low={400} 
          pctl={0.65} 
          type={'score'}/>
        <BadgeWithMeter 
          score={552} 
          high={1000} 
          low={400} 
          type={'score'}/>
        <SmScoreWithMeter 
          score={700}
          high={1000} 
          low={400} />
        <SmScoreWithMeter 
          score={320}
          high={1000} 
          low={400} />
        <SmScoreWithMeter 
          score={970}
          high={1000} 
          low={400} />
        <RPMMeter />
      </div>
    );
  }
}

export default App;
