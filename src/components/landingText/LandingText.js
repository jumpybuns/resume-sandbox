import React, { Component } from 'react';
import styles from './LandingText.css';

export default class LandingText extends Component {
  render() {
    return (
      <div className={styles.containerProjects}>
        <h1>Animations</h1>
        <div className={styles.overlay}></div>
      </div>
    );
  }
}
