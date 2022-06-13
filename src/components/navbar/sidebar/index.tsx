import React, { useState } from 'react'
import Container from './styles'
import { Icon } from '@iconify/react'
import navArray from '../navData'
import Link from 'next/link'

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(true)
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
        <ul className="sidebar-items">
          {navArray.map((item, key) => (
            <Link href={'#' + item.menuItem} key={key}>
              <li className="sidebar-item">
                <div className="icon-container">
                  <Icon icon={item.menuIcon} className="sidebar-icon" />
                </div>
                <h5>{item.menuItem}</h5>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </Container>
  )
}

export default Sidebar
