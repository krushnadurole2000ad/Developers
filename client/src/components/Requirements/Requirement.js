import React from 'react'

// component to propagate the requirments details. 
const Requirement = (props) => {

  const {requirement} = props;

  return (
    <div>
      <h1>Requirement</h1>
      <h3>{requirement.Title}</h3>
      <p>{requirement.Technologies}</p>
      <p>{requirement.description}</p>
      <p>{requirement.deadline}</p>
      <p>{requirement.email}</p>
      <p>{requirement.contactNum}</p>
      <p>{requirement.postedby}</p>
      <p>{requirement.date}</p>
      
    </div>
  )
}

export default Requirement