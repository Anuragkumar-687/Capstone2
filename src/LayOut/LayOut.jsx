import React from 'react'
import {Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

//  Pages......
import Login from '../pages/login/Login' 
import Signup from '../pages/signup/Signup' 
import Home from '../pages/home/Home'
import Profile from '../pages/profile/Profile'
import ChatBox from '../pages/chatbox/chatBox'

//  Components...... 
import Nav from '../components/nav/Nav' 
import LeftBar from '../components/leftbar/leftBar'  
import RightBar from '../components/rightbar/RightBar'

export default function Layout() {

  // Feed....
  const Feed =()=>{
    return (
      <>
      <Nav />
      <main>
        <LeftBar /> 
        <div className="container">
          <Outlet />
        </div>
        <RightBar />
      </main>
      </>
    )
  }


  // Router.......
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Feed />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/profile/:id',
          element: <Profile />
        },
        {
          path: '/chatbox/:id',
          element: <ChatBox />
        },
        
      ]
    },
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

