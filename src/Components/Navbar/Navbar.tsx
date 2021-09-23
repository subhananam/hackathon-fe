import React from 'react'
import { Menu } from 'antd'
import { Link, NavLink } from 'react-router-dom'

interface IMenuList {
  name: string
  url: string
}

const menus: Array<IMenuList> = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Page1',
    url: '/page1',
  },
]

function Navbar() {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      {menus.map((menu, index) => (
        <NavLink exact key={index} to={menu.url} className="ant-menu-overflow-item ant-menu-item ant-menu-item-active ant-menu-item-only-child" activeClassName="ant-menu-overflow-item ant-menu-item ant-menu-item-active ant-menu-item-only-child ant-menu-item-selected">
          {menu.name}
        </NavLink>
      ))}
    </Menu>
  )
}

export default Navbar
