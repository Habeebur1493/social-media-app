import React from 'react'
import './leftbar.css'
import { Link } from 'react-router-dom'


//Components.......
import CurrentUser from '../../FackApis/CurrentUserData'

//Icon Image......
import Friend from '../../assets/icon/1.png'
import Group from '../../assets/icon/2.png'
import Market from '../../assets/icon/3.png'
import Watch from '../../assets/icon/4.png'
import Memories from '../../assets/icon/5.png'
import Events from '../../assets/icon/6.png'
import Gaming from '../../assets/icon/7.png'
import Gallery from '../../assets/icon/8.png'
import Videos from '../../assets/icon/9.png'
import Messages from '../../assets/icon/10.png'

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
            <h4>Friends</h4>
          </div>
          </Link>
          <Link to='/'>
          <div className="item">
            <img src={Group} alt="" />
            <h4>Group</h4>
          </div>
          </Link>
          <Link to='/'>
          <div className="item">
            <img src={Market} alt="" />
            <h4>Market</h4>
          </div>
          </Link>
          <Link to='/'>
          <div className="item">
            <img src={Watch} alt="" />
            <h4>Watch</h4>
          </div>
          </Link>
          <Link to='/'>
          <div className="item">
            <img src={Memories} alt="" />
            <h4>Memories</h4>
          </div>
          </Link>
        </div>
        <div className="menu"></div>
      </div>
    </div>
  )
}
