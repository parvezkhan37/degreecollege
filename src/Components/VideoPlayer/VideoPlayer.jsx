import React, { useRef, useState } from 'react'
import './VideoPlayer.css'
import video from '../../asset/video.mp4';

const VideoPlayer = ({playState, setPlayState}) => {

    let player = useRef(null);

    let closePlayer = (e) => {
        if(e.target===player.current){
            setPlayState(false);
        }
    }

  return (
    <div className={`video-player ${playState?"":"hide"}` } ref={player} onClick={closePlayer}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer
