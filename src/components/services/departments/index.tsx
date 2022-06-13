import React, { useEffect, useState } from 'react'
import Container from './styles'
import departmentArray from './departmentsData'
import { Icon } from '@iconify/react'

interface ServicesProps {
  icon?: string
  department?: string
  active?: boolean
  position: number
}

const Departments: React.FC<ServicesProps> = ({ position }) => {
  const [activeIcon, setActiveIcon] = useState(departmentArray)
  const handleIconClick = (index: number) => {
    const tempIcons = activeIcon
    tempIcons.forEach((tempIcon, index2) => {
      if (index !== index2) {
        tempIcon.active = false
      }
    })
    tempIcons[index].active = !tempIcons[index].active
    setActiveIcon([...tempIcons])
  }

  const [scrollWidth, setScrollWidth] = useState<number>()
  useEffect(() => {
    if (window.innerWidth >= 1259) {
      setScrollWidth(588)
    } else if (window.innerWidth <= 800) {
      setScrollWidth(294)
    }
  })

  return (
    <Container marginLeft={(position * scrollWidth).toString() + 'px'}>
      <div className="department-container">
        {departmentArray.map((item, index) => (
          <div
            onClick={() => handleIconClick(index)}
            className={`department-item ${
              activeIcon[index].active ? 'active' : 'inactive'
            }`}
            key={index}
          >
            <div className="icon-container">
              <Icon icon={item.icon} className="department-icon" />
            </div>
            <h4>{item.department}</h4>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Departments
