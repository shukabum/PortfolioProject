import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import Home from '../home/Home'
import About from '../about/About'
import Contacts from '../contacts/Contacts'
import './layout.scss'
const Layout = () => {
  return (
    <>
      <div className='App'>
        <Sidebar />
        <div className='page'>
          <Outlet />

        </div>
      </div>
      
    </>
  )
}

export default Layout
