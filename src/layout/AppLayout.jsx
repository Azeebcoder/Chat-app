import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Header'

const AppLayout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <h1>footer</h1>
    </>
  )
}

export default AppLayout