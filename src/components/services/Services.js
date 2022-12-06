import React from 'react';
import'./Services.css';
import {Row, Col} from 'react-bootstrap';
// import servicesDetails from './servicesDetails';
import Data from './Data';
import img1 from'../images/consultancy.jpeg';
import img2 from'../images/design.jpg';
import img3 from '../images/internship.jpg';
import img4 from '../images/photo6.jpeg';
import img5 from '../images/photo9.jpeg';

function Services() {
  // using the .map() to render my card details without hard coding
    // const details= servicesDetails.map(item => {
        // return <Data img={item.src} title={item.title}/>
    // })
  return (
    <div className='services' id='service'>
      <h1>Our Services</h1>
      <Row className='px-5'>
        <Col sm={12} md={4} className='mb-3'>
          <Data
            img={img4}
            title='Construction services'
          /> 
        </Col>
        <Col sm={12} md={4} className='mb-3'>      
          <Data
            img={img2}
            title='Structural Design'
          />
        </Col>
        <Col sm={12} md={4} className='mb-3'>
          <Data
            img={img5}
            title='Building Services'
          />
        </Col> 
      </Row>
      <Row className=' justify-content-md-center px-5 second'> 
        <Col sm={12} md={4} className='mb-3'>     
        <Data
          img={img3}
          title='Internship'
        />
        </Col>
        <Col sm={12} md={4}>        
        <Data
          img={img1}
          title='Consultancy'
        />
        </Col>
      </Row>
      
    </div>
  )
}

export default Services        