import React from 'react'
import './stories.css'

//Fack Api.............
import CurrentUserData from '../../FackApis/CurrentUserData'

//FantAwesome Icon.......

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'

export default function UserStory() {
  return (
    <div className='story'>
        <div className="user">
            <img src={CurrentUserData.map(user=>(user.ProfieImage))} alt="" />
        </div>

            <img src={CurrentUserData.map(user=>(user.CoverPhoto))} alt="" />
            <label htmlFor='storyFiles'>
                <FontAwesomeIcon icon={faAdd} />
                <input type="file" id='storyFiles'/>
            </label>
            <h5>{Add Story}</h5>
    </div>
  )
}
