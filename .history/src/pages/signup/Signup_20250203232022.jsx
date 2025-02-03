import React, { useState } from 'react';
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // Replaces useHistory()

  async function handleSignup(event) {
    event.preventDefault(); // Prevent form reload

    let item = { username, password, email };
    console.warn(item);

    try {
      let result = await fetch("http://localhost:3000/create", {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      });

      result = await result.json();
      localStorage.setItem("user-info", JSON.stringify(result));
      navigate("/login"); // Navigate to login page after successful signup
    } catch (error) {
      console.error("Error during signup:", error);
    }
  }

  return (
    <div className="signup">
      <div className='card'>
        <div className="left">
          <h2>- <br />ChatterBox Signup<br /> -</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum modi ducimus, ea illo tempore accusantium. At beatae, ipsum distinctio quaerat tempore optio impedit quo assumenda?</p>
          <span>Have An Account?</span>
          <Link to='/'>
            <button className='btn btn-primary'>Login</button>
          </Link>
        </div>
        <form className="right" onSubmit={handleSignup}>
          <input
            type="text"
            required
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            required
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            required
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit' className='btn'>Register</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
