import React from 'react'
import { Link } from 'react-router-dom'


//
export default function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-left">
          <Link to='/'> 
          <h3 className='logo'>ChatterBox</h3>
          </Link>
        </div>
        <div className="nav-right">

        </div>
      </div>
    </nav>
  )
}
