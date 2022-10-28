import React, { useContext, useState } from 'react'
import DevContext from '../../context/developers/DevContext';
// component to add the requirmenets. 

const AddRequirement = () => {

  const context = useContext(DevContext);
  const [req,setreq] = useState({Title:"",Technologies:"",description:"",deadline:"",email:"",contactNum:"",postedby:""})
  const {addrequire} = context;
  const handleclick = (e)=>{
    e.preventDefault();
    addrequire(req.Title,req.Technologies,req.description,req.deadline,req.email,req.contactNum,req.postedby);
    setreq({Title:"",Technologies:"",description:"",deadline:"",email:"",contactNum:"",postedby:""});
  }
  const onchange = (e)=>{
    setreq({...req,[e.target.name]:e.target.value});
  }

  return (
    <div className='container'>
      <div>
            <div className='my-3 f'>
                <h1>Add Your Requirement</h1>
                <form className='my-3 f'>
                    <div className="my-3">
                        <label htmlFor="name" className="form-label">Title</label>
                        <input type="text" className="form-control" id="name" name='name' aria-describedby="emailHelp" value={req.name} onChange={onchange} minLength={5} required />
                    </div>
                    <div className="my-3">
                        <label htmlFor="email" className="form-label">Technologies</label>
                        <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" value={req.email} onChange={onchange} minLength={5} required />
                    </div>
                    <div className="my-3">
                        <label htmlFor="contactNum" className="form-label">description</label>
                        <input type="text" className="form-control" id="description" name='description' value={req.description} onChange={onchange} minLength={5} required />
                    </div>
                    <div className="my-3">
                        <label htmlFor="contactNum" className="form-label">deadline</label>
                        <input type="text" className="form-control" id="contactNum" name='contactNum' value={req.contactNum} onChange={onchange} minLength={5} required />
                    </div>
                    <div className="my-3">
                        <label htmlFor="github" className="form-label">email</label>
                        <input type="text" className="form-control" id="github" name='github' value={req.github} onChange={onchange} minLength={5} required />
                    </div>
                    <div className="my-3">
                        <label htmlFor="linkedin" className="form-label">contactNum</label>
                        <input type="text" className="form-control" id="linkedin" name='linkedin' value={req.linkedin} onChange={onchange} minLength={5} required />
                    </div>
                    <div className="my-3">
                        <label htmlFor="resumelink" className="form-label">resumelink</label>
                        <input type="text" className="form-control" id="resumelink" name='resumelink' value={req.resumelink} onChange={onchange} minLength={5} required />
                    </div>
                    <div className="my-3">
                        <label htmlFor="achievements" className="form-label"> Posted By</label>
                        <input type="text" className="form-control" id="achievements" name='achievements' value={req.achievements} onChange={onchange} minLength={5} required />
                    </div>





                    {/* <button onClick={handleclick}>Add My reqeloper Profile</button> */}
                    <button type="button" onClick={handleclick} class="btn btn-outline-success">Add My reqeloper Profile</button>

                </form>
            </div>
        </div>
    </div>
  )
}

export default AddRequirement