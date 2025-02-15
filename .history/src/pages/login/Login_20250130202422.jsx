import React from 'react'

import './login.css'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="login">
        <div className='card'>
        <div className="left">
            <h2> - <br /> ChatterBox <br /> -</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum modi ducimus, ea illo tempore accusantium. At beatae, ipsum distinctio quaerat tempore optio impedit quo assumenda?</p>
            <span>Don't Have An Account?</span>
            <Link to='/signup'>
                <button className='btn btn-primary'>Register</button>
            </Link>
           
        </div>
        <form className="right">
            <input type="text" required placeholder='username'/>
            <input type="password" required placeholder='password'/>
            <button type='submit' className='btn'>Login</button>
        </form>
    </div>
    </div>
    

  )
}

