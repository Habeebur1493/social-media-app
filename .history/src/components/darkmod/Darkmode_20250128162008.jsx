import React from 'react'
import './darkmode.css'


// FontAwesome Icon........


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

export default function Darkmode() {

  const Darkmode = () => {
    document.querySelector('body').classList.toggle('darkmode');
  }
  return (
    <div className='dark-mood-icon'>
        <FontAwesomeIcon icon={faLightbulb} 
        onClick={Darkmode} />
    </div>
  )
}
