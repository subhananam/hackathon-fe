import React from 'react'
import { Badge, IconButton } from '@mui/material'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import { Link } from 'react-router-dom'

interface INavigation {
  name: string
  url: string
  icon: React.ReactNode
}

function Navigation() {
  const menus: Array<INavigation> = [
    {
      name: 'Shipments',
      url: '/shipments',
      icon: <AirportShuttleIcon />,
    },
    {
      name: 'Trucks',
      url: '/trucks',
      icon: <LocalShippingIcon />,
    },
    {
      name: 'Drivers',
      url: '/srivers',
      icon: <DriveEtaIcon />,
    },
  ]
  return (
    <>
      {menus.map((menu, index) => (
        <Link to={menu.url} key={index} style={{color:"white"}}>
          <IconButton color="inherit" title={menu.name}>
            <Badge color="secondary">{menu.icon}</Badge>
          </IconButton>
        </Link>
      ))}
    </>
  )
}

export default Navigation
