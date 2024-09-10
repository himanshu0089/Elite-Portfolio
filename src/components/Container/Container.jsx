import React from 'react'
import { Link } from 'react-router-dom'
import './Container.css'

function Container() {
  return (
    <div className='container'>
      <div className='tech'>
        <h3>Technologies</h3>
        <p>I'm familiar with HTML5, CSS3, Git, JavaScript, NodeJS, ReactJS, and Web Hosting</p>
      </div>
      
      <div className='container-blog'>
        <h3>Blogs</h3>
        <p>I am also working on some technical and non techincal blogs. I like to document my journey of learning.</p>
        <Link to='/blog' className='container-blog-link'>Read Blogs</Link>
      </div>
      </div>
  )
}

export default Container