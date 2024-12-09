
import { useState } from 'react'
import {Outlet} from 'react-router-dom'

export default function RootLayout() {
  const [loggedIn,setLoggedIn] =useState('')
  console.log(loggedIn);
  
  return (
    <div>
    <Outlet context={[loggedIn,setLoggedIn]}/>
    </div>
  )
}
