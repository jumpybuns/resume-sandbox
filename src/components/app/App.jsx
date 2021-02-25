import React from 'react';
import Metronome from './Metronome';
import pdf from '../../../public/Resume.jpg';
import styles from './App.css';
import LiveClock from '../app/LiveClock';

function App() {
  return (
    <>
      <div>
        <Metronome />
        <LiveClock />
        <a className={styles.button} href={pdf} download="your file name">
          Download
        </a>
      </div>
    </>
  );
}
export default App;
