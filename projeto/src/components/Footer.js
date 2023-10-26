import React from 'react';
import '../Styles/Footer.css';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <span>
          <FaInstagram size={24} color="#fff"/>
        </span>
        <span>
          <FaFacebook size={24} color="#fff"/>
        </span>
        <span>
          <FaTwitter size={24} color="#fff"/>
        </span>
        <span>
          <FaLinkedin size={24} color="#fff"/>
        </span>
      </div>
      <p>&copy; 2023 Beholder.com</p>
    </div>
  );
}

export default Footer;
