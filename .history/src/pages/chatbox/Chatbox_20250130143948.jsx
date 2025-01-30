import React from 'react'
import './chatbox.css'

//Components...........

import Stories from '../../components/stories/Stories'

//Fack Api.............
import CurrentUserData from '../../FackApis/CurrentUserData'

//Font Awesome Icon.......
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faFeed, faLink } from '@fortawesome/free-solid-svg-icons'


export default function Chatbox(){
  return (
    <>
        <Stories/>
        <div className="chat-box">
          <div className="chat-box-top">
            
          </div>
         
          <div className="chat-box-bottom"></div>
        </div>
    </>
  )
}
