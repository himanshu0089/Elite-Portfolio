import React from 'react'
import { Link } from 'react-router-dom'

function Container() {
  return (
    <div className='container'>
      <div>
        <h3>Technologies</h3>
        <p>I'm familiar with HTML5, CSS3, Git, JavaScript, NodeJS, ReactJS, and Web Hosting</p>
      </div>
      <div>
        <h3>Projects</h3>
        <p>I like to showcase my work and thus, you can see my projects hosted online</p>
        <Link to='/project'><button>See Projects</button></Link>
      </div>
      <div>
        <h3>Blogs</h3>
        <p>I am also working on some technical and non techincal blogs. I like to document my journey of learning.</p>
        <Link to='/blog'>Read Blogs</Link>
      </div>
      </div>
  )
}

export default Container