import React from 'react'

// component to present all the avaialble requirements. 
const Allrequirements = () => {
  const [req,setreq] = useState({postedby:"", Title:"", Technologies:"", description:"", deadline:"", email:"", contactNum:""})
  const getreq = async()=>{
    const response = await fetch('http://localhost:5000/api/v1/allreq',{
      method:'GET',
      headers: {
        'Content-Type': 'application/json',
        'authtoken': localStorage.getItem('authtoken')
      }
    })
    const json = await response.json();
    console.log(json);
    setreq(json);
  }
  return (
    <div>
      <h1>Allrequirements</h1>

    </div>
  )
}

export default Allrequirements