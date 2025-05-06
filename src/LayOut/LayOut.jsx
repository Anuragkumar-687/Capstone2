import React from 'react'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'

//  Pages......
import Login from '../pages/login/Login' 
import Signup from '../pages/signup/Signup' 

export default function Layout() {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login/>,
    },
    {
      path: '/signup',
      element: <Signup/>,

    },
    {
      path: '*',
      element: <div>Page Not Found</div>,
    }
  ])
  return (
    <> 
    < RouterProvider router={router} />
    </>
  )
}

