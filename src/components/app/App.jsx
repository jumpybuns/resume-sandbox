import React from 'react';
import Metronome from './Metronome';
import pdf from '../../../public/Resume.jpg';
import styles from './App.css';
import LiveClock from '../app/LiveClock';
// import YoutubeSearch from './YoutubeSearch';

function App() {
  return (
    <>
      <div>
        <Metronome />
        {/* <YoutubeSearch /> */}
        <LiveClock />
        <a className={styles.button} href={pdf} download="your file name">
          Download
        </a>
      </div>
    </>
  );
}
export default App;
