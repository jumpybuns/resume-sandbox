import React, { Component } from 'react';
import Youtube from 'youtube-api-search';
import YTSearch from 'youtube-api-search';

// const API_KEY = process.env.YOUTUBE_API_KEY;

export default class YoutubeSearch extends Component {
  state = {
    videos: [],
    displayVideo: null,
  };
  videoSearch = (term) => {
    YTSearch({ key: process.env.YOUTUBE_API_KEY, term: term }, (videos) => {
      //do something with videos
      this.setState({
        videos: videos,
        displayVideo: video[0],
      });
    });
  };
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    return (
      <div>
        <Youtube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />
      </div>
    );
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
