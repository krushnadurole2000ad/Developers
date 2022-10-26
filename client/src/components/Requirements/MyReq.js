import React from 'react'

const MyReq = () => {
    const [req,setreq] = useState({})
    const getmyreq = async()=>{
        const response = await fetch('',{
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
        
    </div>
  )
}

export default MyReq