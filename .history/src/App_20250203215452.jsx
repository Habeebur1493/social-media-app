import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../Layout'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'


const App = () => {
  return (
    <div>
       <Layout />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
