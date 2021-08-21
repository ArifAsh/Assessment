import React from "react";
import "./red.css"
import speaker1 from "../../Images/medium17.png"
import speaker2 from "../../Images/medium27.png"
import mp3 from "../../Images/ReachingtheSkyLongVersion-320bit.mp3"
import { useState } from "react";
import { useEffect } from "react";



const AudioContext = window.AudioContext || window.webkitAudioContext;

const audioContext = new AudioContext();


export default()=>{
    const [playing,setPlaying] = useState(false)
    const [first,setFirst] = useState(true)
   

  function playSound(){
    const audioElement = document.querySelector('audio');
    if (first){
    const track = audioContext.createMediaElementSource(audioElement);
    track.connect(audioContext.destination);
    }
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
    // play or pause track depending on state
    if (!playing) {
        audioElement.play();
        setPlaying(!playing)
    } else if (playing) {
        audioElement.pause();
        setPlaying(!playing)
    }

    audioElement.addEventListener('ended', () => {
        setPlaying(!false)
    }, false);

    setFirst(false)
  }


useEffect(()=>{
    let clientX = -100;
let clientY = -100;
const innerCursor = document.querySelector(".cursor--small");

const initCursor = () => {
  // add listener to track the current mouse position
  document.addEventListener("mousemove", e => {
    clientX = e.clientX;
    clientY = e.clientY;
  });
  
  // transform the innerCursor to the current mouse position
  // use requestAnimationFrame() for smooth performance
  const render = () => {
    innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
    // if you are already using TweenMax in your project, you might as well
    // use TweenMax.set() instead
    // TweenMax.set(innerCursor, {
    //   x: clientX,
    //   y: clientY
    // });
    
    requestAnimationFrame(render);
  };
  requestAnimationFrame(render);
    initCursor();
};


},[])


    return (
        <div className="red">
             
            <a href="#" className="button try" >TRY IT NOW</a>
            <div className="text">
            
            <h1>SUPERIOR SOUND</h1>
            <p>Experience live versions of your favorite songs.</p>
            <a href="#" className="button" >SEE DEMO</a>
            </div>
            <div>
                <img onClick={playSound} className="img2"src={speaker2} alt="" />
                <img onClick={playSound} className="img1"src={speaker1} alt="" />
                <audio src={mp3}></audio>
                </div>
            <div class="cursor cursor--small"></div>
            <canvas class="cursor cursor--canvas" resize></canvas>
            
        </div>
  )
}