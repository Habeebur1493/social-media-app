import React from 'react'

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

//Pages.....
import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup'
import Home from '../pages/home/Home'
import Profile from '../pages/profile/Profile'
import Chatbox from '../pages/chatbox/Chatbox'


//Components.....
import Nav from '../components/nav/Nav'
import LeftBar from '../components/leftbar/LeftBar'
import RightBar from '../components/rightbar/RightBar'

export default function layout() {

//Feed..........
const Feed = () => {
    return (
        <>
        <Nav/>
            <main>
                <LeftBar/>
                <div className="container">
                    <Outlet/>
                </div>
                <RightBar/>
            </main>
        </>
    )    
}


    //Router..........
    const router = createBrowserRouter([
        {
            path : '/',
            element : <Login/>,
            children: [
                {
                    path : '/',
                    element : <Feed/>
                },
                {
                    path : '/signup',
                    element : <Signup/>
                },
                {
                    path : '/Home',
                    element :<Home/>
                },
                {
                    path : '/profile/:id',
                    element :<Profile/>
                },
                {
                    path : '/chatbox/:id',
                    element :<Chatbox/>
                },
               ]
        }
    ])


    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}