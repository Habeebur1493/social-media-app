import React from 'react'
import { createBrowserRouter, Router } from 'react-router-dom'
//Pages.....
import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup'

export default function layout() {
    const router = createBrowserRouter([
        {
            path : '/login',
            element : <Login />
        },
        {
            path : '/signup',
            element : <Signup />
        },
    ])


    return (
        <>
               <RouterProvider router={router} />
        </>
    )
}