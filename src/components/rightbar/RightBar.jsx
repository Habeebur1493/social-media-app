import React from 'react'
import './rightbar.css'

//Components.......
import Message from '../message/Message'
import FriendReq from '../friendReq/FriendReq'


export default function RightBar() {
  return (
    <div className='rightbar'>
      <div className="rightbar-container">
        <Message/>
        <FriendReq/>
      </div>
    </div>
  )
}
