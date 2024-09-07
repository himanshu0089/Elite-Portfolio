import React from 'react'
import {useState} from "react"; 
import "./About.css"
function About() {
  const[refer,setRefer]=useState("skills")
  return (
    
    <div className="about" id="about">
    <div className="content">
      <div className="row">
        <div className="about-col-1">
          <img src="port.jpg" alt="" /> 
          <h1>Sysytem</h1>
        </div>
        <div className="about-col-2">
          <h2 className='sub-title'>About Me</h2>
          <p>I am a very resposible web deginer.I am a very resposible web deginer.
          I am a very resposible web deginer.I am a very resposible web deginer.I am a very 
          resposible web deginer.I am a very resposible web deginer
          </p>
          <div className="reference" >
          <h3 className={refer==="skills" ? "active" : ""} onClick={()=>setRefer("skills")}>Skills</h3>
          <h3 className={refer==="experience" ? "active" : ""} onClick={()=>setRefer("experience")}>Experience</h3>
          <h3 className={refer==="education" ? "active" : ""} onClick={()=>setRefer("education")}>Education</h3> 
          </div>
          {refer==='skills' && <div className=""> Skills update</div>}
          
          {refer==='experience' && <div className=""> Experience update</div>}

          {refer==='education' &&  <div className="">Education updates</div>}

          
        </div>

      </div>

    </div>
    </div>
  )
}

export default About