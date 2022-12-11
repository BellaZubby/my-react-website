import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import {FaTwitter, FaInstagram, FaFacebook} from 'react-icons/fa';

function Contact() {
    const form = useRef();
    

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z8snfh5', 'template_96wojab', form.current, 'mWXHezphf389lJVN-')
      .then((result) => {
          console.log(result.text);
          alert('Message Sent')
      }, (error) => {
          console.log(error.text);
          alert('Message not Sent')
      });
      e.target.reset();
  };

  return (
    <div id='contact'>
      <h1>Contact</h1>
        <form ref={form} onSubmit={sendEmail} id='contact-form'>
            <input  type="text" name="user_name" placeholder='Name' className='my-5' required/>
            <input  type="email" name="user_email" placeholder='Email' className='mb-5' required/>
            <textarea placeholder ="message" name='message' rows='4' cols='25' className='mb-5 rounded' required></textarea>
            <input type='submit' value='send' className='button'/>
        </form>
        <div className='contact-icons'>
            <a href='https://mobile.twitter.com/BerlogP' className='con-icons'><FaTwitter/></a>
            <a href='https://www.facebook.com/profile.php?id=100088169095165'className='con-icons'><FaFacebook/></a>
            <a href='https://www.instagram.com/berlogmultiproject/' className='con-icons'><FaInstagram/></a>
        </div>

    </div>
  )
}

export default Contact