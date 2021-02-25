import React from 'react';
import Metronome from './Metronome';
import pdf from '../../../public/Resume.jpg';
import styles from './App.css';

function App() {
  return (
    <>
      <div>
        <Metronome />
        <a className={styles.button} href={pdf} download="your file name">
          Download
        </a>
      </div>
    </>
  );
}
export default App;
