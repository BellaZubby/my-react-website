import React from 'react';
import Services from '../services/Services';
import './Home.css';
import Slide from '../Carousel/Slide';
import About from '../about/About';
import Contact from '../contact/Contact';
import NavBar from '../navbar/NavBar';

function Home() {
  return (
    <>
        <NavBar/>
        <div className='main'>
          <div className='first'>
            <h1 className='hero-describe'>WELCOME TO BERLOG MULTI PROJECT.</h1>
          </div>
          <div className='transparent-bg'></div>
        </div>
        <About/>
        <Services/>
        <div className='section-a'>
        <Slide/>
        </div>
        <Contact/>
    </>
  )
}

export default Home