import React from 'react';
import Detail from './Detail';
import './Gallery.css';
import NavGallery from './NavGallery';
import {Row, Col} from 'react-bootstrap';
import img1 from '../images/photo2.jpg';
import img2 from '../images/photo3.jpg';
import img3 from '../images/photo4.jpg';
import img4 from '../images/photo5.jpeg';
import img5 from '../images/photo6.jpeg';
import img6 from '../images/photo7.jpeg';
import img7 from '../images/photo8.jpeg';
import img8 from '../images/photo9.jpeg';
import img9 from '../images/photo10.jpg';
import img10 from '../images/photo11.jpg';
import img11 from '../images/berlog1.jpeg';
import img12 from '../images/photo12.jpg';
import img13 from '../images/photo13.jpg';
import img14 from '../images/photo14.jpg';
import img15 from '../images/photo15.jpg';
import img16 from '../images/photo16.jpg';
import img18 from '../images/photo18.jpeg';
import img19 from '../images/photo19.jpeg';



function Gallery() {
  return (
    <div className='gallery'>
      <NavGallery/>
      <h1 className='gallery-header'>Gallery</h1>
        <Row className='my-3 px-3'>
          <Col sm={12} lg={4} className='mb-3'>
            <Detail
            img= {img1}/> 
          </Col>
          <Col sm={12} lg={4} className='mb-3'>
            <Detail
            img= {img2}/> 
          </Col>
          <Col sm={12} lg={4}>
            <Detail
            img= {img3}/> 
          </Col>
        </Row>

        {/* second row */}
        <Row className='mb-3 px-3'>
          <Col sm={12} lg={4} className='mb-3'>
            <Detail
              img={img4}/>
          </Col>
          <Col sm={12} lg={4} className='mb-3'>
            <Detail
              img={img5}/>
          </Col>
          <Col sm={12} lg={4}>
            <Detail
              img={img6}/>
          </Col>
        </Row>
        {/* third row */}
        <Row className='mb-3 px-3'>
          <Col sm={12} lg={4} className='mb-3'>
            <Detail
            img={img7}/>
          </Col>
          <Col sm={12} lg={4} className='mb-3'>
            <Detail
            img={img8}/>
          </Col>
          <Col sm={12} lg={4}>
            <Detail
            img={img9}/>
          </Col>
        </Row>
        {/* fourth row */}
        <Row className='mb-3 px-3'>
          <Col sm={12} lg={4} className='mb-3'>
            <Detail
            img={img10}/>
          </Col>
          <Col sm={12} lg={4} className='mb-3'>
            <Detail
            img={img11}/>
          </Col>
          <Col sm={12} lg={4}>
            <Detail
            img={img12}/>
          </Col>
        </Row>
        {/* fifth row */}
        <Row className='mb-3 px-3'>
          <Col sm={12} lg={4} className='mb-3'>
            <Detail
            img={img13}/>
          </Col>
          <Col sm={12} lg={4} className='mb-3'>
            <Detail
            img={img14}/>
          </Col>
          <Col sm={12} lg={4}>
            <Detail
            img={img15}/>
          </Col>
        </Row>
        {/* sixth row */}
        <Row className='mb-3 px-3'>
          <Col sm={12} lg={4} className='mb-3'>
            <Detail
            img={img16}/>
          </Col>
          <Col sm={12} lg={4} className='mb-3'>
            <Detail
            img={img19}/>
          </Col>
          <Col sm={12} lg={4}>
            <Detail
            img={img18}/>
          </Col>
        </Row>
    </div>

  )
}

export default Gallery