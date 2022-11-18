import React from 'react'
import './Requirement.css'
import formatDistance from 'date-fns/formatDistance'
// component to propagate the requirments details. 
const Requirement = (props) => {

  const {requirement,updatereq} = props;
  const datestr = requirement.date;
  const str = formatDistance(
    new Date(datestr),
    new Date()
);

  return (
    <div className='container'>
      <h1>Requirement</h1>
      <p className='title'>{requirement.Title}</p>
      <p><b>Technologies</b> : {requirement.Technologies}</p>
      <p><b>Description</b>: {requirement.description}</p>
      <p><b>Deadline</b> : {requirement.deadline}</p>
      <p><b>Email</b> : {requirement.email}</p>
      <p><b>Contact No.</b> :{requirement.contactNum}</p>
      {/* <p>postedby : {requirement.postedby}</p> */}
      {/* <p>{requirement.date}</p> */}
      <p>{str}</p>
      <i className="fa-solid fa-pen-to-square mx-2" onClick={() => { updatereq(requirement) }}></i> 
     {/* <i className="fa-solid fa-trash-can  mx-2" onClick={() => { deletereq(user._id); props.showAlert("Deleted successfully", "success"); }}></i> */}
    </div>
  )
}

export default Requirement