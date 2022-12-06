import React from 'react';
import {Carousel} from 'react-bootstrap';
import img1 from'../images/photo6.jpeg';
import img7 from'../images/photo3.jpg';
import img3 from '../images/photo7.jpeg';
import img5 from '../images/photo2.jpg';
import './Slide.css';



function Slide() {
  return (
    <div className='slide'>
        <Carousel fade className='lead'>
      <Carousel.Item>
        <img
          className="d-block w-100 photo"
          src = {img7}
          alt="First slide"
          height='500'
        />
        <Carousel.Caption>
          <h3 className='img1'>UMUAHIA, ABIA STATE</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 photo"
          src= {img5}
          alt="Second slide"
          height='500'
        />

        <Carousel.Caption>
          <h3 className='img1'>PORTHARCOURT, RIVERS STATE</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 photo"
          src= {img1}
          alt="Third slide"
          height='500'
        />

        <Carousel.Caption>
          <h3>Dignity in Labour</h3>
        </Carousel.Caption>
      </Carousel.Item> 
      <Carousel.Item>
        <img
          className="d-block w-100 photo"
          src= {img3}
          alt="Third slide"
          height='500'
        />

        <Carousel.Caption>
          <h3 className='img1'>
            ABIA STATE.
          </h3>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>

    </div>
  )
}

export default Slide;