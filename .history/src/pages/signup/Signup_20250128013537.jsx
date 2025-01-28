import React from 'react'

export default function Signup(){

  return (
    <div className="signup">
        <div className='card'>
        <div className="left">
            <h2>ChatterBox <br /> -</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum modi ducimus, ea illo tempore accusantium. At beatae, ipsum distinctio quaerat tempore optio impedit quo assumenda?</p>
            <span>Don't Have An Account?</span>
            <button className='btn btn-primary'>Register</button>
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
