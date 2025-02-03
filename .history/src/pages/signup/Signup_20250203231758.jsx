import React, { useState } from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
import {useHistory} from 'react-router-dom'

function Signup() {
  
const [username, setusername] = useState("")
const [password, setpassword] = useState()
const [email, setemail] = useState()


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
    result = await result.json()
    localStorage.setItem("user-info",JSON.stringify(result))

}

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
            onChange={(e) => setusername(e.target.value)}
            />
            <input 
            type="email" 
            required placeholder='email' 
            onChange={(e) => setemail(e.target.value)}
            />
            <input type="password" 
            required placeholder='password'
            onChange={(e) => setpassword(e.target.value)}
            />
            <button type='submit' className='btn'>Register</button>
        </form>
    </div>
    </div>
  )
}
export default Signup
