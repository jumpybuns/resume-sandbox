import React, { Component } from 'react';
import styles from './Metronome.css';
import click1 from './click1.wav';
import click2 from './click2.wav';
// import one from './one.mp3';

class Metronome extends Component {
  state = {
    playing: false,
    count: 0,
    bpm: 100,
    beatsPerMeasure: 4,
    // click1: { click1 },
    // click2: { click2 },
  };

  audio = React.createRef();

  handleBpmChange = (event) => {
    const bpm = event.target.value;
    this.setState({ bpm });
  };

  startStop = () => {
    if (this.state.playing) {
      //Stop the timer
      clearInterval(this.timer);
      this.setState({
        playing: false,
      });
    } else {
      //Start a timer with the current BPM
      this.timer = setInterval(this.playClick, (60 / this.state.bpm) * 1000);
      this.setState(
        {
          count: 0,
          playing: true,
          // Play a click "immediately" (after setState finishes)
        },
        this.playClick
      );
    }
  };

  playClick = () => {
    const { count, beatsPerMeasure } = this.state;

    this.setState((state) => ({
      count: (state.count + 1) % state.beatsPerMeasure,
    }));
    // The first beat will have a different sound than the others
    if (count % beatsPerMeasure === 0) {
      this.audio.current.src = click2;
      this.audio.current.play();
    } else {
      // return   one ref={this.click1} src={click1} autoPlay />;
      this.audio.current.src = click1;
      this.audio.current.play();
    }
  };

  render() {
    const { playing, bpm } = this.state;
    return (
      <div className={styles.metronome}>
        <div className={styles.bpmSlider}>
          <div>{bpm}BPM</div>
          <input
            type="range"
            min="30"
            max="240"
            value={bpm}
            onChange={this.handleBpmChange}
          />
          <audio ref={this.audio} />
        </div>
        <button onClick={this.startStop}>{playing ? 'Stop' : 'Start'}</button>
      </div>
    );
  }
}

export default Metronome;
