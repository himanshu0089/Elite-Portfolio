import React from 'react'
import './Project.css';
import { Link } from 'react-router-dom';

function Project() {
  return (
    <div className='projects'>
      <div className="title">My Work</div>
      <div className="project">
        <div className="work">
          <h2 className="">First Fork</h2>
          <div className="">I am here at station for the site of son, I am here at station for the site of son, I am here at station for the site of son</div>
          <img src="work-1.png" alt="" /> 
          <a href="https://firstfork0089.netlify.app/"><i class="fa-solid fa-arrow-up-right-from-square"></i></a> 
        </div>
        <div className="work">
          <h2 className="">Movie Clone</h2>
          <div className="">I am here at station for the site of son, I am here at station for the site of son, I am here at station for the site of son</div>
          <img src="work-2.png" alt="" /> 

          <Link to="https://movieclone0089.netlify.app/"><i class="fa-solid fa-arrow-up-right-from-square"></i></Link>
        </div>
        <div className="work">
          <h2 className="">Grill Bites</h2>
          <div className="">I am here at station for the site of son, I am here at station for the site of son, I am here at station for the site of son</div>
          <img src="work-3.png" alt="" /> 

         <Link to="https://grillbites0089.netlify.app/"><i class="fa-solid fa-arrow-up-right-from-square"></i></Link> 
        </div>
      </div>

    </div>
  )
}

export default Project
