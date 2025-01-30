import React from 'react'
import './stories.css'

//Fack Api.............
import CurrentUserData from '../../FackApis/CurrentUserData'


export default function UserStory() {
  return (
    <div className='story'>
        <div className="user">
            <img src={CurrentUserData.map(user=>(user.ProfieImage))} alt="" />
        </div>

            <img src={CurrentUserData.map(user=>(user.CoverPhoto))} alt="" />
    </div>
  )
}
