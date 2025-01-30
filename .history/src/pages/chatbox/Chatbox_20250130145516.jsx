import React from 'react'
import './chatbox.css'

//Components...........

import Stories from '../../components/stories/Stories'

//Fack Api.............
import CurrentUserData from '../../FackApis/CurrentUserData'

//Font Awesome Icon.......
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faFileAlt } from '@fortawesome/free-solid-svg-icons'


export default function Chatbox(){
  return (
    <>
        <Stories/>

        <div className="chat-box">
          <div className="chat-box-top">
             <img src={CurrentUserData.map(user=>(user.ProfieImage))} alt="" />
                <div className="user-name">
                  <h3>Al Habibi</h3>
                  <h5>@al_habibi</h5>
                </div>
          </div>

          <div className="box-bottom">
            <form action="#">
              <input type="text" placeholder='Write Something' />
              <button type='submit' className='btn btn-primary' >
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
              </button>
              <label htmlFor='FileAlt' >
                <input type="file" id="FileAlt" />
                <FontAwesomeIcon icon={faFileAlt} />
              </label>
            </form>
          </div>
        </div>
    </>
  )
}
