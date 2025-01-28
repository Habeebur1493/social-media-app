import React from 'react'

import './login.css'

export default function Login() {
  return (
    <div className="card">
        <div className='login'>
        <div className="left">
            <h2>ChatterBox</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum modi ducimus, ea illo tempore accusantium. At beatae, ipsum distinctio quaerat tempore optio impedit quo assumenda?</p>
            <span>Don't Have An Account?</span>
            <button className='btn btn-primary'>Register</button>
        </div>
        <div className="right">
            <input type="text" required placeholder='username'/>
            <input type="password" required placeholder='password'/>
            <button type='submit'>Login</button>
        </div>
    </div>
    </div>
    

  )
}

