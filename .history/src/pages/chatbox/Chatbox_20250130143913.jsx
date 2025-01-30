import React from 'react'
import './chatbox.css'

//Components...........

import Stories from '../../components/stories/Stories'

export default function Chatbox(){
  return (
    <>
        <Stories/>
        <div className="chat-box">
          <div className="chat-box-top"></div>
          <div className="chat-box-mid"></div>
          <div className="chat-box-bottom"></div>
        </div>
    </>
  )
}
