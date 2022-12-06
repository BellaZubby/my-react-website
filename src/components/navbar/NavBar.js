import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo1.jpeg';
import './NavBar.css';
import {Link} from 'react-router-dom';
import {HashLink as Linker} from 'react-router-hash-link';



function NavBar() {
  return (
    <div>  
      <Navbar className='fixed-top main-navbar' variant={'light'} expand="lg">
          <Navbar.Brand href="#home"><img src={logo} alt='logo' className='logo-icon'></img><span>Berlog Multi Project</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='mx-3'/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link as = {Link} to={'/'} className='icon-link' style={{color:'rgb(8,54,70)'}}>Home</Nav.Link>
                <Nav.Link as ={Linker} to={'#about'} className='icon-link'style={{color:'rgb(8,54,70)'}}>About</Nav.Link>
                <Nav.Link as ={Linker} to={'#service'} className='icon-link'style={{color:'rgb(8,54,70)'}}>Services</Nav.Link>
                <Nav.Link as = {Link} to={'/gallery'} className='icon-link'style={{color:'rgb(8,54,70)'}}>Gallery</Nav.Link>
                <Nav.Link as = {Linker} to={'#contact'} className='icon-link'style={{color:'rgb(8,54,70)'}}>Contact</Nav.Link>


              </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar