import React from 'react'
import Header from '../../component/Header/Header'
import { Outlet } from 'react-router-dom'
import {dashboards} from '../../Data/Data.js'
function Dashboards() {
  return (
    <>
      <Header
      title = "Dashboard"
      array ={dashboards}
      />
      <Outlet/>
    </>
  )
}

export default Dashboards
