/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import Container from './styles'
import departmentArray from './departmentsData'
import { Icon } from '@iconify/react'

interface ServicesProps {
  icon?: string
  department?: string
  active?: boolean
}

const Departments: React.FC<ServicesProps> = () => {
  const [activeIcon, setActiveIcon] = useState(departmentArray)
  const handleIconClick = (index: number) => {
    const tempIcons = activeIcon
    tempIcons[index].active = !tempIcons[index].active
    setActiveIcon([...tempIcons])
  }

  const [showDepartment, setShowDepartment] = useState(false)
  const handleShowDepartment = () => setShowDepartment(!showDepartment)

  return (
    <Container>
      <div
        className={`department-container ${
          showDepartment ? 'active' : 'inactive'
        }`}
      >
        <Icon
          icon="bi:arrow-left-square-fill"
          className="left-arrow arrow"
          onClick={handleShowDepartment}
        />
        {departmentArray.map((item, index) => (
          <div
            onClick={() => handleIconClick(index)}
            className={`department-item ${
              activeIcon[index].active ? 'active' : 'inactive'
            }`}
          >
            <div className="icon-container">
              <Icon icon={item.icon} className="department-icon" />
            </div>
            <h4>{item.department}</h4>
          </div>
        ))}
        <Icon
          icon="bi:arrow-right-square-fill"
          className="right-arrow arrow"
          onClick={handleShowDepartment}
        />
      </div>
    </Container>
  )
}

export default Departments
