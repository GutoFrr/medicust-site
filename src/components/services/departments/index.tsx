import React, { useState } from 'react'
import Container from './styles'
import departmentArray from './departmentsData'
import { Icon } from '@iconify/react'

interface ServicesProps {
  icon?: string
  department?: string
}

const Departments: React.FC<ServicesProps> = () => {
  const [activeIcon, setActiveIcon] = useState(false)
  const [selected, setSelected] = useState(0)
  const handleIconClick = key => {
    if (selected === key) {
      setActiveIcon(false)
    } else {
      setActiveIcon(true)
    }

    setSelected(key)
  }

  return (
    <Container>
      {departmentArray.map((item, key) => (
        <div
          key={key}
          onClick={() => handleIconClick(key)}
          className={`department-item ${
            activeIcon && key === selected ? 'active' : 'inactive'
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
