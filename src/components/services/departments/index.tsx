/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import Container from './styles'
import departmentArray from './departmentsData'
import { Icon } from '@iconify/react'

interface ServicesProps {
  icon?: string
  department?: string
  open?: boolean
}

const Departments: React.FC<ServicesProps> = () => {
  const [activeIcon, setActiveIcon] = useState(departmentArray)

  const handleIconClick = (index: number) => {
    const tempIcons = activeIcon
    tempIcons[index].open = !tempIcons[index].open
    setActiveIcon([...tempIcons])
  }

  return (
    <Container>
      {departmentArray.map((item, index) => (
        <div
          onClick={() => handleIconClick(index)}
          className={`department-item ${
            activeIcon[index].open ? 'active' : 'inactive'
          }`}
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
