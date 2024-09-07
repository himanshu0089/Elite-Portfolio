import React from 'react'
import "./Home.css";
import Container from '../Container/Container';
import Banner from '../Banner/Banner';
import About from '../../Pages/About/About';

function Home() {
  return (
    <div>
        <Banner />
        <About />
        <Container />
    </div>
  )
}

export default Home