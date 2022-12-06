import React from 'react';
import {Row, Col,} from 'react-bootstrap';
import about from '../images/about.jpg';
import './About.css';

function About() {
  return (
    <div className='about-div' id='about'>
      <h1 className='about-header mb-5'>WE ARE EXPERTS IN CONSTRUCTION FIELD</h1>
      <Row className='about-main'>
        <Col sm={12} lg={6} className='mb-3'>
          <img src={about} alt='about' className='rounded image'/>
        </Col>
        <Col sm={12} lg={6}>
        <p className='about-paragraph'>
        BERLOG MULTI PROJECT LTD is a relatively new, but pace setting firm of construction contractors. 
        We are a building and Civil Engineering company providing   services in the building industry ranging from refurbishment works, new structures and add-ons in the building section, 
        to swimming pool, mini dams estate roads, roads Krebs and walk ways, culverts, 
        bridges, primary and secondary roads in the Civil Engineering section.</p>
        <p className='about-paragraph'>We also provide architectural services, Project Management construction, 
        Construction Management, Quantity Surveying and Construction Cost Consultancy. 
        We offer flexible customers services to meet client's needs across the private and public 
        business sectors.   
        </p>
        </Col>
      </Row>
    </div>
  )
}

export default About