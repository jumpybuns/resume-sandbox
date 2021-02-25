import Clock from 'react-live-clock';
import React, { Component } from 'react';

export default class LiveClock extends Component {
  render() {
    return (
      <div>
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />;
      </div>
    );
  }
}
