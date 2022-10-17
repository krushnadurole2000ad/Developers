import React, { useState } from 'react';
import {json, useNavigate} from 'react-router-dom'

const Login = () => {
  
  const [credentials,setcredientials] = useState({email:"",password:""});
  const navigate = useNavigate();
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const response = await fetch('https://localhost:5000/api/v1/login',{
      method:'POST',
      headers:{
        'content_Type':'application/json'
      },
      body:JSON.stringify({email:credentials.email,password:credentials.password})
    })
    const json = await response.json();
    console.log(json);
    if(json.success){
      // save the auth token and redirect from here to home. 
      localStorage.setItem('authtoken',json.authtoken);
      navigate('/')
    }

  }
  const onchange = (e)=>{
    setcredientials({...credentials,[e.target.name]:e.target.value})
  }
  return (
    <>
            <div className="container mt-3">
                <h2 className='mb-3'>Log In to continue With iNoteBook</h2>
                <h5>If you have Account else signup</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="email" name='email' value={credentials.email} onChange={onchange} placeholder="" required />
                        <label htmlFor="email">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="password" value={credentials.password} onChange={onchange} name='password' placeholder="" required />
                        <label htmlFor="password">Password</label>
                    </div>
                    <button type="submit" className="btn btn-primary my-3" >Submit</button>
                </form>
            </div>
        </>
  )
}

export default Login