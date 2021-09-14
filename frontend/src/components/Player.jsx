import React from 'react';
import YouTube from 'react-youtube';

export default function Player(props) {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
   const _onReady = (event) => {
        // access to player in all event handlers via event.target
      //  event.target.pauseVideo();
      }
  return (

//""2g811Eo7K8U" 
     <YouTube videoId={props.videoId} opts={opts} onReady={_onReady} />
  );

 
}