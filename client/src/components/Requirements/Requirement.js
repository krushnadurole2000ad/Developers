import React from 'react'

// component to propagate the requirments details. 
const Requirement = (props) => {

  const {Req} = props;

  return (
    <div>
      <h1>Requirement</h1>
      <h3>{Req.Title}</h3>
      <p>{Req.Technologies}</p>
      <p>{Req.description}</p>
      <p>{Req.deadline}</p>
      <p>{Req.email}</p>
      <p>{Req.contactNum}</p>
      <p>{Req.postedby}</p>
      <p>{Req.date}</p>
      
    </div>
  )
}

export default Requirement