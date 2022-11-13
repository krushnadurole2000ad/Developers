import React, { useContext, useEffect,useRef,useState } from 'react'
import DevContext from '../../context/developers/DevContext';
import  context  from '../../context/developers/DevContext'
import  Requirement from "../Requirements/Requirement"; 
// component to present all the avaialble requirements. 
const Allrequirements = () => {
  const context = useContext(DevContext);
  const {getreq,reqs,UpdateReq} =context;
  const [req, setreq] = useState({ id: "", eTitle: "", eTechnologies: "", edescription: "", edeadline: "", eemail: "", econtactNum: "" })
  useEffect(() => {
    getreq();
  }, [])
  const ref = useRef(null);
  const refclose = useRef(null);
  const handleClick = ()=>{
      UpdateReq(req.id,req.eTitle,req.eTechnologies,req.edescription,req.edeadline,req.eemail,req.econtactNum)
      refclose.current.click();
      console.log("updated");

  }
  const onChange = (e)=>{
      setreq({...req,[e.target.name]:e.target.value});
  }

  const updatereq = (currentreq)=>{
      ref.current.click();
      setreq({id:currentreq._id,eTitle:currentreq.Title,eTechnologies:currentreq.Technologies,edescription:currentreq.description,edeadline:currentreq.deadline,eemail:currentreq.email,econtactNum:currentreq.contactNum})
      console.log("updatreq")
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
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="email" className="form-control" id="etitle" name='etitle' aria-describedby="emailHelp" value={req.eTitle} onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name='edescription' value={req.edescription} onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Technologies</label>
                                    <input type="text" className="form-control" id="eTechnologies" name='eTechnologies' value={req.eTechnologies} onChange={onChange} />
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
      <h1>All Requirements</h1>
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