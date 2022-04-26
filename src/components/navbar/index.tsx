/* eslint-disable react/jsx-key */
import React from 'react'
import Container from './styles'
import navArray from './navData'

import logo from '../../assets/hero-images/logo.png'

interface NavProps {
  menuItem: string
}

const Navbar: React.FC<NavProps> = () => {
  return (
    <Container>
      <div className="navbar">
        <img src={logo} alt="Logo Medicust" className="logo" />
        <ul className="nav-menu">
          {navArray.map(item => (
            <li className="menu-item">{item.menuItem}</li>
          ))}
        </ul>
        <button className="nav-btn">Get Appoinment</button>
      </div>
    </Container>
  )
}

export default Navbar
