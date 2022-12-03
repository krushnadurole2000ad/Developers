import React, { useEffect, useRef, useState, useContext } from 'react'
import Requirement from "../Requirements/Requirement"
import DevContext from '../../context/developers/DevContext';
import { useNavigate } from 'react-router-dom';
import './myreq.css'
const MyReq = (props) => {
  const ref = useRef(null);
  const refclose = useRef(null);

  const navigate = useNavigate();
  const context = useContext(DevContext)
  const { myreqs, setmyreqs, getmyreq } = context;
  // const [reqs, setreqs] = useState([]);
  const [req, setreq] = useState({ id: "", eTitle: "", eTechnologies: "", edescription: "", edeadline: "", eemail: "", econtactNum: "" })
  const [flag, setflag] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('authtoken')) {
      getmyreq();
    }
    else {
      navigate('/login')
    }
  }, [])

  const updatereq = (currentreq) => {
    ref.current.click();
    setreq({ id: currentreq._id, eTitle: currentreq.Title, eTechnologies: currentreq.Technologies, edescription: currentreq.description, edeadline: currentreq.deadline, eemail: currentreq.email, econtactNum: currentreq.contactNum })
  }
  const handleClick = () => {
    updatemyreq(req.id, req.eTitle, req.eTechnologies, req.edescription, req.edeadline, req.eemail, req.econtactNum)
    refclose.current.click();
    props.showAlert("Updated Successfully", "success");
  }
  const onChange = (e) => {
    setreq({ ...req, [e.target.name]: e.target.value });
  }

  const updatemyreq = async (id, Title, Technologies, description, deadline, email, contactNum) => {
    // localhost:5000/api/v1/updatereq/6360c04378854a0264692e1d
    const response = await fetch(`https://developerrvit.onrender.com/api/v1/updatereq/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authtoken': localStorage.getItem('authtoken')
      },
      body: JSON.stringify({ Title, Technologies, description, deadline, email, contactNum })
    })
    const json = await response.json();
    let newmyreq = JSON.parse(JSON.stringify(myreqs));
    for (let index = 0; index < newmyreq.length; index++) {
      const element = newmyreq[index];
      if (element._id === id) {
        newmyreq[index].Title = Title;
        newmyreq[index].Technologies = Technologies;
        newmyreq[index].description = description;
        newmyreq[index].deadline = deadline;
        newmyreq[index].email = email;
        newmyreq[index].contactNum = contactNum;
        break;
      }
    }
    setmyreqs(newmyreq);
  }

  return (
    <div>
      <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <form className='my-3'>
                <div className="mb-3">
                  <label htmlFor="Title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="eTitle" name='eTitle' value={req.eTitle} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Technologies</label>
                  <input type="text" className="form-control" id="eTechnologies" name='eTechnologies' value={req.eTechnologies} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input type="text" className="form-control" id="edescription" name='edescription' value={req.edescription} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="deadline" className="form-label">Deadline</label>
                  <input type="text" className="form-control" id="edeadline" name='edeadline' value={req.edeadline} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="text" className="form-control" id="eemail" name='eemail' value={req.eemail} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="contactNum" className="form-label">Contact No.</label>
                  <input type="text" className="form-control" id="econtactNum" name='econtactNum' value={req.econtactNum} onChange={onChange} minLength={5} required />
                </div>

              </form>
            </div>
            <div className="modal-footer">
              <button ref={refclose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button onClick={handleClick} type="button" className="btn btn-primary">Update Requirement</button>
            </div>
          </div>
        </div>
      </div>
      <h1>My Uploaded Requirements</h1>
      <div className="container mx-2">
        {myreqs.length === 0 && "No Requirements to Display 🥺🥺🥺"}
      </div >
      <div>
        {
          myreqs.map((req) => {
            return <Requirement key={req._id} requirement={req} updatereq={updatereq} flag={flag} />
          })
        }

      </div>
    </div>
  )
}
export default MyReq
















// const getmyreq = async () => {
//   const response = await fetch('https://developerrvit.onrender.com/api/v1/getmyreq', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       'authtoken': localStorage.getItem('authtoken')
//     }
//   })
//   const json = await response.json();
//   console.log(json);
//   setreqs(json);
// }





















    // const getmyreq = async () => {
    //   const response = await fetch('https://developerrvit.onrender.com/api/v1/getmyreq', {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'authtoken': localStorage.getItem('authtoken')
    //     }
    //   })
    //   const json = await response.json();
    //   console.log(json);
    //   setreqs(json);
    // }
    // const updatemyreq = async (id, Title, Technologies, description, deadline, email, contactNum) => {
    //   // localhost:5000/api/v1/updatereq/6360c04378854a0264692e1d
    //   const response = await fetch(`https://developerrvit.onrender.com/api/v1/updatereq/${id}`, {
    //     method: 'PUT',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'authtoken': localStorage.getItem('authtoken')
    //     },
    //     body: JSON.stringify({ Title, Technologies, description, deadline, email, contactNum })
    //   })
    //   const json = await response.json();
    //   let newmyreq = JSON.parse(JSON.stringify(json));
    //   for (let index = 0; index < newmyreq.length; index++) {
    //     const element = newmyreq[index];
    //     if (element._id === id) {
    //       newmyreq[index].Title = Title;
    //       newmyreq[index].Technologies = Technologies;
    //       newmyreq[index].description = description;
    //       newmyreq[index].deadline = deadline;
    //       newmyreq[index].email = email;
    //       newmyreq[index].contactNum = contactNum;
    //     }
    //   }
    //   setreqs(reqs);
    // }