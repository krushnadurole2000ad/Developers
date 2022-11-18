import React, { useState } from 'react';
import { json, useNavigate } from 'react-router-dom'
import '../Auth/Login.css'
const Login = () => {

  const [credentials, setcredientials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const response = await fetch('http://localhost:5000/api/v1/login',{
    const response = await fetch('https://developerrvit.onrender.com/api/v1/login', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    })
    const json = await response.json();
    console.log(json);
    if (json.success) {
      console.log("success")
      // save the auth token and redirect from here to home. 
      localStorage.setItem('authtoken', json.authtoken);
      navigate('/')
    } else {
      console.log("danger")

    }

  }
  const onchange = (e) => {
    setcredientials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div className="container mt-3 t">
        <div><p>If you have account Please Login Else Sign Up</p>
          </div>
        <form onSubmit={handleSubmit}  className="tt">
          <div className="form-floating mb-3">
            <input type="email" className="form-control ip" id="email" name='email' value={credentials.email} onChange={onchange} required />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating ip">
            <input type="text" className="form-control ip" id="password" name='password' value={credentials.password} onChange={onchange} required />
            <label htmlFor="password" >Password</label>
          </div>
          <div>
          <button type="submit" className="btn btn-outline-success my-3" >Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login