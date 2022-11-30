import React, { useContext, useEffect, useRef, useState } from 'react'
import DevContext from '../../context/developers/DevContext';
import Developer from './Developer';
import '../Developer/Alldevelopers.css'
import { useNavigate } from 'react-router-dom';
const Alldevelopers = (props) => {
  const context = useContext(DevContext);

  const ref = useRef(null);
  const refclose = useRef(null);
   
  const navigate = useNavigate();
  const { getdev, devs,updatedev } = context;
  const [dev, setdev] = useState({ id: "", eemail: "", eecontact: "", eedescr: "", egithub: "", elink: "" });

  useEffect(() => {
    if (localStorage.getItem('authtoken')) {
      getdev();
    }
    else {
      navigate('/login')
    }
  }, [])

  const updateDev = (curdev) => { 
    ref.current.click();
    setdev({ id: curdev._id, eemail: curdev.email, eecontact: curdev.contactNum, eedescr: curdev.description, egithub: curdev.github, elink: curdev.linkedin })
  }
  const handleclick = (e) => {
    updatedev(dev.id, dev.eemail, dev.eecontact, dev.eedescr, dev.egithub, dev.elink);
    refclose.current.click();
    props.showAlert("")
  }
  const onchange = (e) => {
    setdev({ ...dev, [e.target.name]: e.target.value });
  }
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
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="eemail" name='eemail' aria-describedby="emailHelp" value={dev.eemail} onChange={onchange} minLength={5} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input type="text" className="form-control" id="eedescr" name='eedescr' value={dev.eedescr} onChange={onchange} minLength={5} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Github</label>
                  <input type="text" className="form-control" id="egithub" name='egithub' value={dev.egithub} onChange={onchange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refclose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button  onClick={handleclick} type="button" className="btn btn-primary">Update Dev</button>
            </div>
          </div>
        </div>
      </div>

      <div className="ht"><h1>All Developers</h1></div>
      <div className="container mx-2">
        {devs.length === 0 && "No Developers to Display 🥺🥺🥺"}
      </div>
      {devs.map((dev) => {
        return <Developer key={dev._id} developer={dev} updateDev={updateDev} />
      })}
    </>
  )
}

export default Alldevelopers