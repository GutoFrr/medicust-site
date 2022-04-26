/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import Container from './styles'
import departmentArray from './departmentsData'
import { Icon } from '@iconify/react'

interface ServicesProps {
  icon: string
  department: string
}

const Departments: React.FC<ServicesProps> = () => {
  const [activeIcon, setActiveIcon] = useState(false)
  const handleIconClick = () => setActiveIcon(!activeIcon)

  return (
    <Container>
      {departmentArray.map(item => (
        <div
          onClick={handleIconClick}
          className={`department-item ${activeIcon ? 'active' : 'inactive'}`}
        >
          <div className="icon-container">
            <Icon icon={item.icon} className="department-icon" />
          </div>
          <h4>{item.department}</h4>
        </div>
      ))}
    </Container>
  )
}

export default Departments
