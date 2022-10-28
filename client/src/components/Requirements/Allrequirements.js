import React, { useEffect,useState } from 'react'
const context = require('../../context/developers/DevContext')
// component to present all the avaialble requirements. 
const Allrequirements = () => {
  const [reqs, setreqs] = useState({ postedby: "", Title: "", Technologies: "", description: "", deadline: "", email: "", contactNum: "" })
  const {getreq} = context;
  useEffect(() => {
    getreq();
  }, [])
  return (
    <div>
      <h1>Allrequirements</h1>

    </div>
  )
}

export default Allrequirements