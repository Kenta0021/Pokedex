import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import Header from '../Layout/Header'

const RouteProtected = () => {
  const namemTrainer = useSelector(state => state.nameTrainer)

  if(namemTrainer){
    return (
      <>
      <Header/>
      <Outlet/>
      </>
    )
  }else {
    return <Navigate to='/'/>
  }
}

export default RouteProtected