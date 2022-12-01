import React, { useContext } from 'react'
import './Requirement.css'
import formatDistance from 'date-fns/formatDistance'
import DevContext from '../../context/developers/DevContext';

// component to propagate the requirments details. 
const Requirement = (props) => {

  const context = useContext(DevContext)
  const { requirement, updatereq } = props;
  const { deletereq } = context;
  const datestr = requirement.date;
  const str = formatDistance(
    new Date(datestr),
    new Date()
  );
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const datefinal = new Date(requirement.date).toLocaleString('en-US',options, {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    });
  return (
    <>
      <div className="maindev">
        <div className="maind ev card  text-center">
          <div className=" card-header   navbar-light na" >
            {requirement.Technologies}
          </div>
          <div class="card-body">
            <h5 class="card-title ">{requirement.Title}</h5>
            <p class="card-text">{requirement.description}</p>
            <h6>{requirement.email}</h6>
            <a href={requirement.github}>Github</a> <br></br>
            <a href={requirement.linkedin}>linkedin</a>
            <p>{requirement.contactNum}</p>
            {/* <a href="/" class="btn btn-outline-dark">Let's make collabration</a> */}
            <button className='btn btn-outline-dark'>Let's make collabration</button>
          </div>
          <div>
            {props.flag && <i className="fa-solid fa-pen-to-square mx-2" onClick={() => { updatereq(requirement) }}></i>}
            {props.flag && <i className="fa-solid fa-trash-can  mx-2" onClick={() => { deletereq(requirement._id)}}></i>}
          </div>
          <div class="card-footer text-muted">
            {/* {developer.date} */}
            {/* {str} */}
            {datefinal}
          </div>
        </div>
      </div>



    </>
  )
}

export default Requirement









// <div className='container'>
//       <h1>Requirement</h1>
//       <p className='title'>{requirement.Title}</p>
//       <p><b>Techn ologies</b> : {requirement.Technologies}</p>
//       <p><b>Description</b>: {requirement.description}</p>
//       <p><b>Deadline</b> : {requirement.deadline}</p>
//       <p><b>Email</b> : {requirement.email}</p>
//       <p><b>Contact No.</b> :{requirement.contactNum}</p>
//       {/* <p>postedby : {requirement.postedby}</p> */}
//       {/* <p>{requirement.date}</p> */}
//       <p>{str}</p>
//       <i className="fa-solid fa-pen-to-square mx-2" onClick={() => { updatereq(requirement) }}></i>
//      <i className="fa-solid fa-trash-can  mx-2" onClick={() => { deletereq(requirement._id); props.showAlert("Deleted successfully", "success"); }}></i>
//     </div>
