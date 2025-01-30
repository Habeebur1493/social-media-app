import React from 'react'
import './addPost.css'


//Fake Api.............
import CurrentUserData from '../../FackApis/CurrentUserData'
//Font Awesome Icons............

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faVideo, faTags, faLocation, faSmile } from '@fortawesome/free-solid-svg-icons'

export default function AddPost() {
  return (
    <form action="">
        <div className="user form-top">
            <img src={CurrentUserData.map(user=>(user.ProfieImage))} alt="" />
            <input type="text" placeholder='What is on your mind?'/>
            <button type='submit' className='btn btn-primary'>Post</button>
        </div>
        <div className="post-categories">
            <label htmlFor="file">
                <input type="file" />
                <span><FontAwesomeIcon icon={faImage} /></span>
            </label>
            <label htmlFor="file">
                <input type="file" />
                <span><FontAwesomeIcon icon={faVideo} /></span>
            </label>
            <span><FontAwesomeIcon icon={faTags} /></span>
            <span><FontAwesomeIcon icon={faLocation} /></span>
            <span><FontAwesomeIcon icon={faSmile} /></span>
        </div>
    </form>
  )
}
