/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import Container from './styles'
import Departments from './departments'
import Advertising from '../advertising'
import { Icon } from '@iconify/react'

const Services = () => {
  const [scrollDepartment, setScrollDepartment] = useState<number>(-1)
  const handleScrollDepartment = (direction: 'foward' | 'backward') => {
    if (direction === 'foward') {
      setScrollDepartment(scrollDepartment > -1 ? scrollDepartment - 1 : 0)
    } else if (direction === 'backward') {
      setScrollDepartment(scrollDepartment < 0 ? scrollDepartment + 1 : -1)
    }

    // if (window.outerWidth <= 1259) {
    // } else if (window.outerWidth <= 800) {
    //   if (direction === 'foward') {
    //     setScrollDepartment(scrollDepartment > -7 ? scrollDepartment - 1 : 0)
    //   } else if (direction === 'backward') {
    //     setScrollDepartment(scrollDepartment < 0 ? scrollDepartment + 1 : -7)
    //   }
    // }
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
        <div className="department">
          <Icon
            icon="bi:arrow-left-square-fill"
            className="left-arrow arrow"
            onClick={() => handleScrollDepartment('backward')}
          />
          <Departments position={scrollDepartment} />
          <Icon
            icon="bi:arrow-right-square-fill"
            className="right-arrow arrow"
            onClick={() => handleScrollDepartment('foward')}
          />
        </div>
      </div>
      <Advertising />
    </Container>
  )
}

export default Services
