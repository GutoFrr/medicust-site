import React, { useState } from 'react'
import Container from './styles'
import Departments from './departments'
import Advertising from '../advertising'
import { Icon } from '@iconify/react'

const Services = () => {
  const [scrollDepartment, setScrollDepartment] = useState<number>(0)
  const handleScrollDepartment = (direction: 'foward' | 'backward') => {
    if (window.innerWidth > 800) {
      if (direction === 'foward') {
        setScrollDepartment(scrollDepartment > -1 ? scrollDepartment - 1 : 0)
      } else if (direction === 'backward') {
        setScrollDepartment(scrollDepartment < 0 ? scrollDepartment + 1 : -1)
      }
    } else if (window.innerWidth <= 800) {
      if (direction === 'foward') {
        setScrollDepartment(scrollDepartment > -7 ? scrollDepartment - 1 : 0)
      } else if (direction === 'backward') {
        setScrollDepartment(scrollDepartment < 0 ? scrollDepartment + 1 : -7)
      }
    }
  }

  return (
    <Container>
      <div className="services" id="Department">
        <div className="services-title">
          <h3>Our All Department</h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore fugiat sunt culpa officia deserunt mollit anim est
            laborum.
          </p>
        </div>
        <Icon
          icon="bi:arrow-left-square-fill"
          className="left-arrow arrow"
          onClick={() => handleScrollDepartment('backward')}
        />
        <div className="department">
          <Departments position={scrollDepartment} />
        </div>
        <Icon
          icon="bi:arrow-right-square-fill"
          className="right-arrow arrow"
          onClick={() => handleScrollDepartment('foward')}
        />
      </div>
      <Advertising />
    </Container>
  )
}

export default Services
