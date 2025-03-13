import React, { useRef } from 'react'

const PlayVideo = () => {

    let vdoRef=useRef()

    let  playVdo=()=>{
        vdoRef.current.play()
    }
    let pauseVdo=()=>{
        vdoRef.current.pause()
    }

  return (
    <>
    
    <video src="https://www.w3schools.com/html/mov_bbb.mp4" ref={vdoRef}></video>

    <button onClick={playVdo}>Play</button>
    <button onClick={pauseVdo}>Pause</button>

    </>
  )
}

export default PlayVideo