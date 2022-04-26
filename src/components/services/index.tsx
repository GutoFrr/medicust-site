/* eslint-disable react/jsx-key */
import React from 'react'
import Container from './styles'
import Departments from './departments'

const Services = () => {
  return (
    <Container>
      <div className="services">
        <div className="services-title">
          <h3>Our All Department</h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore fugiat sunt culpa officia deserunt mollit anim est
            laborum.
          </p>
        </div>
        <div className="departments-container">
          <Departments />
        </div>
      </div>
    </Container>
  )
}

export default Services
