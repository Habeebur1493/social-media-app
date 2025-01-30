import React from 'react'
import './feeds.css'
import{Link} from 'react-router-dom'

//Font Awesome Icons............
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




export default function Feed() {
  return (
    <div className='feed'>

      <div className="top-content">
        <Link to='/profile/id'>
          <div className="user">
            <img src={feed.profile} alt="" />
            <h5>{feed.name}</h5>
          </div>
        </Link>
    </div>
  )
}
