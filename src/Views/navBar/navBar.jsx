import React from "react";
import { useEffect } from "react";
import "./navBar.css"

export default()=>{
    useEffect(()=>{
        const myNav = document.querySelector('.nav-links');
        window.onscroll = function () { 
    
            if (window.scrollY > 300) {
                myNav.classList.add("nav-colored");

            } 
            else {
           
                myNav.classList.remove("nav-colored");
            }
        };
    })
  

    function iconClicked(){
     
        const navlinks = document.querySelector(".nav-links")
       

        const links = document.querySelectorAll(".nav-links li")
        navlinks.classList.toggle("open")
        links.forEach(link=>{
        link.classList.toggle('fade');
        })
    }

    return (
        <div>
        <div className="container">
        <div className="burger" onClick={()=>iconClicked()}>
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
        </div>
        <h1> EXP | CON</h1>
       
        
        </div>
        <div className="list">
         <ul className="nav-links">
         <li style={{marginTop:"100px",marginLeft:"-55px"}}><h1><a href="#">WHAT IS IT</a></h1></li>
         <li style={{marginLeft:"-55px"}}><h1><a href="#">PERKS</a></h1></li>
         <li style={{marginLeft:"-55px"}}><h1><a href="#">PRICING</a></h1></li>   
     </ul>
     </div>
     </div>
    )
}