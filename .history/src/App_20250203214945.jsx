import './App.css'
import Layout from './Layout/layout'

function App() {

  return (
    <>
      <Layout />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/' element={<Signup />} />
      </Routes>
      
    </>
  )
}

export default App
