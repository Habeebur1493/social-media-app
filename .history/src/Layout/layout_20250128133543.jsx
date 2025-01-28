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
                    path : '/',
                    element :<Home/>
                },
                {
                    path : '/',
                    element :<Home/>
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