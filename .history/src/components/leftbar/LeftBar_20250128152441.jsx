import React from 'react'
import './leftbar.css'
import { Link } from 'react-router-dom'


//Components.......
import CurrentUser from '../../FackApis/CurrentUserData'

//Icon Image......
import Friend from '../../assets/icon/1.png'

export default function LeftBar() {
  return (
    <div className='leftbar'>
      <div className="left-container">
        <div className="menu">
          <Link to='/profile/id'>
          <div className="user">
            <img src={CurrentUser.map(user=>(user.ProfieImage))} alt="" />
            <h4>Habeebur Rahman</h4>
          </div>
          </Link>
          <Link to='/'>
          <div className="item">
            <img src={Friend} alt="" />
          </div>
          </Link>
        </div>
        <div className="menu"></div>
      </div>
    </div>
  )
}
