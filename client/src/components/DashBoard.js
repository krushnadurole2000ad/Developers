import React, { useState, useEffect, useRef, useContext } from 'react'
import Developer from '../components/Developer/Developer'
import UserProfile from '../components/UserProfile/UserProfile';
import DevContext from '../context/developers/DevContext';
const DashBoard = () => {
  // it is my profile section . 
  const context = useContext(DevContext);
  // const {UpdateUser} = context;
  const [user, setuser] = useState({ id: "", ename: "", eemail: "" });
  useEffect(() => {
    getuser();
  }, [])

  const UpdateUser = async (name, email) => {
    const response = await fetch('http://localhost:5000/api/v1/updateprofile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authtoken': localStorage.getItem('authtoken')
      },
      body: JSON.stringify({ name, email })
    })
    const json = await response.json();
    let newuser = JSON.parse(JSON.stringify(json));
    newuser.name = name;
    setuser(newuser);
  }

  const getuser = async () => {
    const response = await fetch('http://localhost:5000/api/v1/veryhelpful', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authtoken': localStorage.getItem('authtoken')
      },
      body: JSON.stringify()
    })
    const json = await response.json();
    console.log(json);
    setuser(json);
  }

  const updateuser = (currentuser) => {
    ref.current.click();
    setuser({ id: currentuser._id, ename: currentuser.name, eemail: currentuser.email })
  }

  const handleclick = (e) => {
    UpdateUser(user.id, user.ename, user.eemail);
    refclose.current.click();
  }

  const onChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value })
  }

  const ref = useRef(null);
  const refclose = useRef(null);


  return (
    <>
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
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="ename" name='ename' value={user.ename} aria-describedby="emailHelp" onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label"> Email</label>
                  <input type="email" className="form-control" id="eemail" name='eemail' value={user.eemail} onChange={onChange} minLength={5} required />
                </div>
              </form>

            </div>
            <div className="modal-footer">
              <button type="button" ref={refclose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button className="btn btn-primary" onClick={handleclick} type="button">Update Note</button>
            </div>

          </div>
        </div>
      </div>
      <div>
        <div class="col">
          <div class="card h-100">

            {<UserProfile key={user._id} user={user} updateuser={updateuser} />}
          </div>
        </div>
      </div>
    </>
  )
}

export default DashBoard