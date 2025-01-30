import React from 'react'
import './stories.css'

//Fack Api.............
import CurrentUserData from '../../FackApis/CurrentUserData'
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
            </label>
    </div>
  )
}
