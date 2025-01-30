import React from 'react'
import './chatbox.css'

//Components...........

import Stories from '../../components/stories/Stories'

//Fack Api.............
import CurrentUserData from '../../FackApis/CurrentUserData'

//Font Awesome Icon.......
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faFeed, faLink, faArrowAltCircleRight, faFileAlt } from '@fortawesome/free-solid-svg-icons'


export default function Chatbox(){
  return (
    <>
        <Stories/>
        <div className="chat-box">
          <div className="chat-box-top">
          <img src={CurrentUserData.map(user=>(user.ProfieImage))} alt="" />
            <div className="user-name">
                <h3>{CurrentUserData.map(user=>(user.name))}</h3>
                <h5>{CurrentUserData.map(user=>(user.username))}</h5>
            </div>
          </div>
         
          <div className="chat-box-bottom">
            <form action="#">
              <input type="text" placeholder='Write Something' />
              <button type='submit' className='btn btn-primary' >
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
              </button>
              <label  className='btn btn-primary' htmlFor='CFile' >
                <FontAwesomeIcon icon={faFileAlt} />
                <input type="text" />
              </label>
            </form>
          </div>
        </div>
    </>
  )
}
