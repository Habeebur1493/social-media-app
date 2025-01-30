import React from 'react'
import './comments.css'

//Fack Api.............
import CommentData from '../../FackApis/CommentData'
import CurrentUserData from '../../FackApis/CurrentUserData'

export default function Comments() {
  return (
    <div className='comments'>
        <div className="writebox">
            <form action="#">
                <div className="user">
                    <img src={CurrentUserData.map(user=>(user.ProfieImage))} alt="" />
                    <input type="text" placeholder='Write a comment...' />
                    <button type='submit' className='btn btn-primary'>Send</button>
                </div>
            </form>
        </div>

    </div>
  )
}
