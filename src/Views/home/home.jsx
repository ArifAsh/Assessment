import React from "react";
import {useEffect } from "react";

import "./home.css"

let slideIndex = 1;


export default()=>{
   
    useEffect (()=>{
        showSlides(slideIndex);
        setTimeout(changeSlides,10000)
    },[])
    

   
      
    
 
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i ;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
   
  
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    dots[slideIndex+3-1].className += " active";
    dots[slideIndex+5].className += " active";
  }


 function changeSlides(){
    
    slideIndex+=1
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
   if (slideIndex > slides.length) {slideIndex = 1}
   if (slideIndex < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}

  slides[slideIndex-1].style.display = "block";
   dots[slideIndex-1].className += " active";
   dots[slideIndex+3-1].className += " active";
   dots[slideIndex+5].className += " active";
    

  setTimeout(changeSlides, 10000);
}
  
    
    
return(
    <div className="slideshow">
        <div className="slides slides0 fade">
            <div className="slide-content">
            <div className="wrap">
            <span>
                <h1>INTERACTIVE CONCERT EXPERIENCE</h1>
                <h4 style={{width:"100%"}}>Experience your favorite artists like never </h4>
                <h4>before and from the comfort of your own home</h4>
                <br/><br/>
                <a href="#" className="btn-mix-noborder" data-text="color">TRY IT NOW</a>
                </span>
                 <div className="select">
                    <span className="dot" onClick={()=>currentSlide(1)}></span>
                     <span className="dot dot2" onClick={()=>currentSlide(2)}></span>
                     <span className="dot dot3" onClick={()=>currentSlide(3)}></span>
                </div>
                </div>
            </div>
        </div>
        <div className="slides slides1 fade">
            <div className="slide-content">
            <div className="wrap">
            <span>
                <h1>INTERACTIVE CONCERT EXPERIENCE</h1>
                <h4 style={{width:"100%"}}>Experience your favorite artists like never </h4>
                <h4>before and from the comfort of your own home</h4>
                <br/><br/>
                <a href="#" className="btn-mix-noborder" data-text="color">TRY IT NOW</a>
                </span>
                <div className="select">
                    <span className="dot" onClick={()=>currentSlide(1)}></span>
                     <span className="dot dot2" onClick={()=>currentSlide(2)}></span>
                     <span className="dot dot3" onClick={()=>currentSlide(3)}></span>
                </div>
                </div>
            </div>
        </div>
        <div className="slides slides2 fade">
            <div className="slide-content">
                <div className="wrap">
            <span>
                <h1>INTERACTIVE CONCERT EXPERIENCE</h1>
                <h4 style={{width:"100%"}}>Experience your favorite artists like never </h4>
                <h4>before and from the comfort of your own home</h4>
                <br/><br/>
                <a href="#" className="btn-mix-noborder" data-text="color">TRY IT NOW</a>
                </span>
                <div className="select">
                    <span className="dot" onClick={()=>currentSlide(1)}></span>
                     <span className="dot dot2" onClick={()=>currentSlide(2)}></span>
                     <span className="dot dot3" onClick={()=>currentSlide(3)}></span>
                </div>
                </div>
            </div>
        </div>

   
    </div>
)
}
