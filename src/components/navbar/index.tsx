/* eslint-disable react/jsx-key */
import React from 'react'
import Container from './styles'
import navArray from './navData'
import Link from 'next/link'

import logo from '../../assets/hero-images/logo.png'
import heartLogo from '../../assets/hero-images/heart-logo.png'
import Sidebar from './sidebar'

interface NavProps {
  menuIcon?: string
  menuItem?: string
}

const Navbar: React.FC<NavProps> = () => {
  return (
    <Container>
      <div className="navbar">
        <img src={logo} alt="Logo Medicust" className="logo" />

        <ul className="nav-menu">
          {navArray.map(item => (
            <Link href={'#' + item.menuItem}>
              <li className="menu-item">{item.menuItem}</li>
            </Link>
          ))}
        </ul>
        <div className="nav-menu-icon">
          <Sidebar />
        </div>
        <img src={heartLogo} alt="Coração Medicust" className="heart-logo" />
        <div className="white-space"></div>
        <button className="nav-btn">Get Appointment</button>
      </div>
    </Container>
  )
}

export default Navbar
