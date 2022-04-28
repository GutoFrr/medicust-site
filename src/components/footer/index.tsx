/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import React from 'react'
import Container from './styles'

import logo from '../../assets/footer-images/logo.png'

const Footer = () => {
  return (
    <Container>
      <div className="footer">
        <div className="medicust-column">
          <img src={logo} alt="Logo Medicust rodapé" className="logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor
            incididunt ut magna aliqua.
          </p>
          <div className="elipses">
            <div className="secundary-elipse"></div>
            <div className="primary-elipse"></div>
            <div className="secundary-elipse"></div>
          </div>
        </div>
        <div className="departments">
          <h4>Departments</h4>
          <ul>
            <li>Family Medicine</li>
            <li>Women's Health</li>
            <li>Optician</li>
            <li>Pediatrics</li>
            <li>Dermatology</li>
          </ul>
        </div>
        <div className="quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Our Doctors</li>
            <li>Appointment</li>
            <li>blog Post</li>
            <li>Shop Product</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="blog-post-column">
          <h4>Blog Post</h4>
          <div className="blog-post blog-post-1">
            <h6>22.05.2022</h6>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa.
            </p>
          </div>
          <div className="blog-post">
            <h6>22.05.2022</h6>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Footer