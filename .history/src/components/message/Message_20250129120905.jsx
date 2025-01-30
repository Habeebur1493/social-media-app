import React from 'react'
import { Link } from 'react-router-dom'

import './message.css'

//Fack Api.............

import MessageData from '../../FackApis/MessageData'

// Font Awesome Icons............

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHome, faUser, faEnvelope, faBell, faBars, faEdit } from '@fortawesome/free-solid-svg-icons'

export default function Message() {
  return (
    <div className='messages'>
      <div className="message-top">
        <h4>Messages</h4>
        <FontAwesomeIcon icon={faEdit}/>
      </div>
      <div className="message-search">
        <FontAwesomeIcon icon={faSearch}/>
        <input type="search" placeholder='Search Messages'/>
      </div>
      <div className="border-div"></div>

      {
        MessageData.map((message) => (
          <Link to='/chatbox/id'>
            <div className="message" key={message.id}>
              <div className="user">
                <img src={message.img} alt="" />
                <div className="green-active"></div>
              </div>
              <div className="message-body">
                <h5>{message.name}</h5>
                <p>{message.mText}</p>
              </div>
            </div>
          </Link>
        ))
      }
    </div>  
  )
}
