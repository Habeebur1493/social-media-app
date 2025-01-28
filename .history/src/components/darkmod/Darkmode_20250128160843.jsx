import React from 'react'
import './darkmode.css'


// FontAwesome Icon........


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHome, faUser, faEnvelope, faBell, faBars } from '@fortawesome/free-solid-svg-icons'

export default function Darkmode() {
  return (
    <div className='dark-mood-icon'>
        <FontAwesomeIcon icon={faLightbulb} 
        onClick={DarkHandler} />


    </div>
  )
}
