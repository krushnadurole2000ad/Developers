import React, { useState ,useEffect} from 'react'

const DashBoard = () => {
  // it is my profile section . 
  const [user,setuser] = useState({name:"",email:""});
  
  const getuser = async ()=>{
    const response = await fetch('http://localhost:5000/api/v1/veryhelpful',{
      method:'GET',
      headers: {
        'Content-Type': 'application/json',
        'authtoken':localStorage.getItem('authtoken')
      }
    })
    const json = await response.json();
    console.log(json);
    setuser(json);
  }
  
  useEffect(() => {
    getuser();
  }, [])
  return (
    <>
      <div>
        <h2>User Profile</h2>
        <div>
          <h1>{user.name}</h1>
          <h2>{user.email}</h2>
        </div>
      </div>
    </>
  )
}

export default DashBoard