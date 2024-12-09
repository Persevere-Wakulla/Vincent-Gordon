import React from 'react'
import {Outlet} from 'react-router-dom'
import ForumNav from '../Forum/ForumNav'
const ForumLayout = () => {
  return (
    <div>
     <ForumNav />
        <Outlet />
        </div>
  )
}

export default ForumLayout