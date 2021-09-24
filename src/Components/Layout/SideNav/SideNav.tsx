import React from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import PeopleIcon from '@mui/icons-material/People';
import { List } from '@mui/material'
import { Link } from 'react-router-dom';

interface IMenus {
  name: string
  url: string
  icon?: React.ReactNode
}

function SideNav() {
  const menus: Array<IMenus> = [
    {
      name: 'Shipments',
      url: '/shipments',
      icon: <DriveEtaIcon />,
    },
    {
      name: 'Trucks',
      url: '/trucks',
      icon: <LocalShippingIcon />,
    },
    {
      name: 'Drivers',
      url: '/drivers',
      icon: <PeopleIcon />,
    },
  ]
  return (
    <List>
      {menus.map((menu, index) => (
        <Link to={menu.url} key={index} style={{textDecoration:"none", color:"inherit"}}>
        <ListItem button title={menu.name} >
          <ListItemIcon>
            {menu.icon}
          </ListItemIcon>
          <ListItemText primary={menu.name} />
        </ListItem>
        </Link>
      ))}
    </List>
  )
}

export default SideNav
