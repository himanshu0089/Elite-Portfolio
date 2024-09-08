import React from 'react'
import "./Home.css";
import Container from '../Container/Container';
import Banner from '../Banner/Banner';
import About from '../../Pages/About/About';
import Project from '../../Pages/Projects/Project';

function Home() {
  return (
    <div>
        <Banner />
        <About />
        <Project />
        <Container />
    </div>
  )
}

export default Home