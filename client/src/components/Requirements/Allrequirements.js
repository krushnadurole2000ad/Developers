import React, { useContext, useEffect,useState } from 'react'
import  context  from '../../context/developers/DevContext'
import  Requirement from "../Requirements/Requirement"; 
// component to present all the avaialble requirements. 
const Allrequirements = () => {
  // const [reqs, setreqs] = useState({ postedby: "", Title: "", Technologies: "", description: "", deadline: "", email: "", contactNum: "" })
  const {getreq,reqs} = useContext(context);
  useEffect(() => {
    getreq();
  }, [])
  const updatereq = ()=>{

  }
  return (
    <div>
      <h1>Allrequirements</h1>
      <div className="container mx-2">
        {reqs.length === 0 && "No Requirements to Display 🥺🥺🥺"}
      </div>
        {reqs.map((req)=>{
          return <Requirement key={req._id} requirement = {req} updatereq = {updatereq}/>
        })}
    </div>
  )
}

export default Allrequirements