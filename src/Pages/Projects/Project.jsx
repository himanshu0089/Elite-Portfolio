import React from 'react'
import './Project.css';
import { Link } from 'react-router-dom';

function Project() {
  return (
    <div className='projects' id="projects">
      <div className="sub-title">My Work</div>
      <div className="work-list">
        <div className="work">
          <img src="work-1.png" alt="" />
          <div className="layer">
            <h2 className="">First Fork</h2>
            <p className="">First Fork is a food delivery app clone to deliver your food and happiness.</p>
            <a href="https://firstfork0089.netlify.app/"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        </div>
        <div className="work">
          <img src="work-2.png" alt="" />
          <div className="layer">
            <h2 className="">Movie Clone</h2>
            <p className=""> Movie Clone is a the site which takes the trending movies data across the globe and allow you to choose your favourite movies</p>
            <Link to="https://movieclone0089.netlify.app/"><i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
          </div>
        </div>
        <div className="work">
          <img src="work-3.png" alt="" />
          <div className="layer">
            <h2 className="">Grill Bites</h2>
            <p className="">Grill Bites is the restaurant for your cravings.</p> 
            <p>We Prepare the best quality and delicious food.  </p>
            <Link to="https://grillbites0089.netlify.app/"><i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
          </div>
        </div>
      </div>
     <Link> <button className='See-More'>See More</button> </Link>
    </div>
  )
}

export default Project
