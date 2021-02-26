import React from 'react';
import Metronome from './Metronome';
import pdf from '../../../public/Resume.jpg';
import styles from './App.css';
import LiveClock from '../app/LiveClock';
import LandingText from '../landingText/LandingText';
// import wallpaper from '../../../public/wallpaper.jpg';
// import YoutubeSearch from './YoutubeSearch';

function App() {
  return (
    <>
      <div>
        {/* <div style={{ backgroundImage: `url(${wallpaper})` }}> */}
        <Metronome />
        {/* <YoutubeSearch /> */}
        <LiveClock />
        <a className={styles.button} href={pdf} download="your file name">
          Download
        </a>
        {/* </div> */}
        <LandingText />
      </div>
    </>
  );
}
export default App;
