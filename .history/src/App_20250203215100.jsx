import './App.css'
import Layout from './Layout/layout'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Layout />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
      
    </>
  )
}

export default App
