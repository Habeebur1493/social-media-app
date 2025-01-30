import React from 'react'
import './stories.css'

//Fack Api.............
import CurrentUser from '../../FackApis/CurrentUserData'

export default function UserStory() {
  return (
    <div className='story'>
        <div className="user">
            <img src={story.storyProfile} alt="" />
        </div>
            <img src={story.story} alt="" />
            <h5>{story.name}</h5>
    </div>
  )
}
