import React from 'react';
import './Footer.css';
import logo from '../images/logo1.jpeg';
import {Link} from 'react-router-dom';
import {Row, Col,} from 'react-bootstrap';
import {FaTwitter, FaInstagram, FaFacebook, FaEnvelope} from 'react-icons/fa';
import {FaPhone, FaMapMarkerAlt, FaRegCalendarAlt,FaRegCopyright} from 'react-icons/fa';
import {HashLink as Linker} from 'react-router-hash-link';

function Footer() {
  return (
    <div className='footer'>
            <Row className='footer-row'>
        <Col sm={12} md={4} className='mb-5'>
           <img src={logo} alt='logo' className='logo-icon'></img>
            <p className='write-up paragraph'>
              In BERLOG MULTI PROJECT LTD we have a fully established reputation of reliability, 
              technical knowledge, quality and expertise and have continued to 
              benefit from controlled growth through client recommendation and repeat commission.
            </p>
            <a href='https://mobile.twitter.com/BerlogP' className='brand-icons'><FaTwitter/></a>
            <a href='https://www.facebook.com/profile.php?id=100088169095165'className='brand-icons'><FaFacebook/></a>
            <a href='https://www.instagram.com/berlogmultiproject/' className='brand-icons'><FaInstagram/></a>
    
        </Col>
        <Col sm={12} md={4} className='mb-5'>
          <p className='lead'>Contact us</p>
        <p className='write-up'><span className='icons two'><FaPhone/></span><a href='tel:+23437750633' className='number'>+23437750633</a></p>
        <p className='write-up'><span className='icons two '><FaMapMarkerAlt/></span>No. 9, Micheal Amadi close, off G.U. Ake Road, 
                Eliogbolo, Portharcourt, Rivers state.
        </p>
        <p className='write-up'><span className='icons two'><FaEnvelope/></span>berlogmultiproject8@gmail.com.</p>
        <p className='write-up'><span className='icons two'><FaRegCalendarAlt/></span> Mon-Sat; 8am-5pm.</p>
        </Col>
        <Col sm={12} md={4} className='mb-5'>
          <p className='lead'>Menu</p>
           <ul className='list'>
            <li><Link to={'/'}>Home</Link></li>
            <li><Linker to ={'#about'}>About</Linker></li>
            <li><Linker to ={'#service'}>Service</Linker></li>
            <li><Link to ={'/gallery'}>Gallery</Link></li>
           </ul>
        </Col>
      </Row>
      <Row className='center'>
        <p className='write-up'>Copyright <span className='two icons'><FaRegCopyright/></span>2022 Berlog Multi Project Plc. </p>
        <p className='write-up'>All rights reserved.</p>
      </Row>
    </div>
  )
}

export default Footer