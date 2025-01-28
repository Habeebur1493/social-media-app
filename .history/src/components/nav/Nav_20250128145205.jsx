import React from 'react'
import { Link } from 'react-router-dom'

//Fake API............

import CurrentUser from '../../FackApis/CurrentUserData'


// FontAwesome Icons............
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHome, faUser, faEnvelope, faBell, faBars } from '@fortawesome/free-solid-svg-icons'


export default function Nav() {
  return (
    <nav>
      <div className="nav-container">
        {/* ............Nav Left........ */}
        <div className="nav-left">
          <Link to='/'> 
            <h3 className='logo'>ChatterBox</h3>
          </Link>
          <Link to='/'>
            <FontAwesomeIcon icon={faHome}/>
          </Link>
          <Link to='/profile/id'>
            <FontAwesomeIcon icon={faUser}/>
          </Link>
          <div className="Nav-Searchbar">
            <FontAwesomeIcon icon={faSearch}/>
            <input type="search" />
          </div>
        </div>
{/* ............Nav Right........ */}
        <div className="nav-right">
          <Link to='/chatbox/id'>
            <FontAwesomeIcon icon={faEnvelope}/>
          </Link>
          <Link to='/'>
            <FontAwesomeIcon icon={faBell}/>
          </Link>
          <Link to='/'>
            <FontAwesomeIcon icon={faBars}/>
          </Link>
          <div className="user">
            <img src={CurrentUser.map(user => (user.ProfieImage))} alt="" />
            <h4>Habeebur Rahman</h4>
          </div>
        </div>
      </div>
    </nav>
  )
}
