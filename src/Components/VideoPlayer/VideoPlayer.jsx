import React, { useEffect, useRef, useState } from 'react'
import './VideoPlayer.css'
import video from "../../assets/college-video.mp4"

const VideoPlayer = ({videoOn,setVideoOn}) => {
    const player = useRef(null);

    const closePlayer = (e) =>{
        if(e.target === player.current){
            setVideoOn(false);
        }
    }
  return (
    <div className={`video-player ${videoOn ?'':'hide'}`} ref={player} onClick={closePlayer}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer
