import React from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//Pages.....
import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup'
import Home from '../pages/home/Home'

export default function layout() {
    const router = createBrowserRouter([
        {
            path : '/',
            element : ,
            children: [
                {
                    path : '/',
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
        },

        {
            path : '/login',
            element : <Login/>
        },
        {
            path : '/signup',
            element : <Signup/>
        },
    ])


    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}