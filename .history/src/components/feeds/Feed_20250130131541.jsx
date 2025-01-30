import React from 'react'
import './feeds.css'
import{Link} from 'react-router-dom'

//Font Awesome Icons............
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




export default function Feed({ feed }) {
  return (
    <div className='feed'>

      <div className="top-content">
        <Link to='/profile/id'>
          <div className="user">
            <img src={feed.feedProfile} alt="" />
            <div>
              <h5>{feed.name}</h5>
              <small>1 Minutes Ago</small>
            </div>
          </div>
        </Link>
        <span><FontAwesomeIcon icon={faEllipsis} /></span>
      </div>

    </div>
  )
}


