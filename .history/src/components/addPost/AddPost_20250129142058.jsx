import React from 'react'
import './addPost.css'


//Fake Api.............
import CurrentUserData from '../../FackApis/CurrentUserData'
//Font Awesome Icons............

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AddPost() {
  return (
    <form action="">
        <div className="user form-top">
            <img src={CurrentUserData.map(user=>(user.ProfieImage))} alt="" />
            <input type="text" placeholder='What is on your mind?'/>
            <button type='submit' className='btn btn-primary'></button>
        </div>
    </form>
  )
}
