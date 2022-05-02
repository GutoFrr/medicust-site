/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import Container from './styles'
import { Icon } from '@iconify/react'
import navArray from '../navData'

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false)
  const handleOpenSidebar = () => setOpenSidebar(!openSidebar)

  return (
    <Container>
      <div className="menu-icon-container">
        <Icon
          icon="ant-design:menu-fold-outlined"
          className="menu-icon"
          onClick={handleOpenSidebar}
        />
      </div>

      <div className={`sidebar ${openSidebar ? 'active' : 'inactive'}`}>
        <div className="sidebar-title">
          <h4>Menu</h4>
          <Icon
            icon="ant-design:close-circle-filled"
            className="close-icon"
            onClick={handleOpenSidebar}
          />
        </div>
        <div className="sidebar-items">
          {navArray.map(item => (
            <div className="sidebar-item">
              <Icon icon={item.menuIcon} className="sidebar-icon" />
              <h5>{item.menuItem}</h5>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Sidebar
