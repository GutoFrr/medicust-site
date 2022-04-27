/* eslint-disable react/jsx-key */
import React from 'react'
import Container from './styles'
import Departments from './departments'
import Advertising from '../advertising'

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
        <div>
          <Departments icon={''} department={''} />
        </div>
      </div>
      <Advertising />
    </Container>
  )
}

export default Services
