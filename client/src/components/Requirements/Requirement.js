import React from 'react'

// component to propagate the requirments details. 
const Requirement = (props) => {

  const {requirement,updatereq} = props;

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
      <i className="fa-solid fa-pen-to-square mx-2" onClick={() => { updatereq(requirement) }}></i> 
     {/* <i className="fa-solid fa-trash-can  mx-2" onClick={() => { deletereq(user._id); props.showAlert("Deleted successfully", "success"); }}></i> */}
    </div>
  )
}

export default Requirement