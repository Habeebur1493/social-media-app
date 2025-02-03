import React, { useState } from 'react'
import './signup.css'
import { Link } from 'react-router-dom'

{
const [username,setuserName] = useState('')
const [password,setPassword] = useState('')
const [email,setEmail] = useState('')

async function Signup()
    {
      let item = {username,password,email}
      console.warn(item)
     let result = await fetch("http://localhost:3000/create",{
        method: 'POST',
      body: JSON.stringify(item),
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })

    }
}
export default function Signup(){

  return (
    <div className="signup">
        <div className='card'>
        <div className="left">
            <h2>- <br />ChatterBox Signup<br /> -</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum modi ducimus, ea illo tempore accusantium. At beatae, ipsum distinctio quaerat tempore optio impedit quo assumenda?</p>
            <span>Have An Account?</span>
            <Link to ='/'>
                <button className='btn btn-primary'>Login</button>
            </Link>
           
        </div>
        <form className="right">
            <input 
            type="text" 
            required placeholder='username'
            onChange={(e) => setuserName(e.target.value)}
            />
            <input 
            type="email" 
            required placeholder='email' 
            onChange={(e) => setEmail(e.target.value)}
            />
            <input type="password" 
            required placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit' className='btn'>Register</button>
        </form>
    </div>
    </div>
  )
}
