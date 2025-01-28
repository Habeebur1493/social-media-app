import React from 'react'
import './rightbar.css'

//Components.......
import Message from '../message/Message'


export default function RightBar() {
  return (
    <div className='rightbar'>
      <div className="rightbar-container">
        <Message/>
      </div>
    </div>
  )
}
