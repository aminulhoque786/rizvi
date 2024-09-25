import React from 'react'
import Header from "../../components/Header"
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
  </>
  )
}

export default Layout