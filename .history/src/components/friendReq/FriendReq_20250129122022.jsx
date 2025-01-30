import React from 'react'

import './friendReq.css'
import { Link } from 'react-router-dom'

//Fack Api.............

import FriendReqData from '../../FackApis/FriendReqData'

export default function FriendReq() {
  return (
    <div className='Friend-Requests'>
      <h4>Friend Requests</h4>

      {
        FriendReqData.map(friend => (
          <div className="request">
            <Link to='/profile/id'>
              <div className="info" key={friend.id}>
                <div className="user">
                  <img src={friend.img} alt="" />
                </div>
              </div>
            </Link>
          </div>
        ))
      }
    </div>
  )
}
