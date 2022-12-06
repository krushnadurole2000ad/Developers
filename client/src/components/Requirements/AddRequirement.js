import React, { useContext, useState  , useEffect} from 'react'
import DevContext from '../../context/developers/DevContext';
// component to add the requirmenets. 
import { useNavigate } from 'react-router-dom';
const AddRequirement = (props) => {
  const navigate = useNavigate();
  const context = useContext(DevContext);
  const [req,setreq] = useState({Title:"",Technologies:"",description:"",deadline:"",email:"",contactNum:"",postedby:""})
  const {addrequire} = context;
  useEffect(() => {
    if (!localStorage.getItem('authtoken')) {
      navigate('/login')
    }
  }, [])
  const handleclick = (e)=>{
    e.preventDefault();
    addrequire(req.Title,req.Technologies,req.description,req.deadline,req.email,req.contactNum,req.postedby);
    setreq({Title:"",Technologies:"",description:"",deadline:"",email:"",contactNum:"",postedby:""});
    props.showAlert("Added successfully", "success")
  }
  const onchange = (e)=>{
    setreq({...req,[e.target.name]:e.target.value});
  }

  return (
    <div className='container'>
      <div>
            <div className='my-3 f'>
                <h1 className='name'>Add Your Requirement</h1>
                <form className='my-3 f'>
                    <div className="my-3">
                        <label htmlFor="Title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="Title" name='Title' aria-describedby="emailHelp" value={req.Title} onChange={onchange} minLength={5} required />
                    </div>
                    <div className="my-3">
                        <label htmlFor="Technologies" className="form-label">Technologies</label>
                        <input type="email" className="form-control" id="Technologies" name='Technologies' aria-describedby="emailHelp" value={req.Technologies} onChange={onchange} minLength={5} required />
                    </div>
                    <div className="my-3">
                        <label htmlFor="description" className="form-label">description</label>
                        <input type="text" className="form-control" id="description" name='description' value={req.description} onChange={onchange} minLength={5} required />
                    </div>
                    <div className="my-3">
                        <label htmlFor="deadline" className="form-label">deadline</label>
                        <input type="text" className="form-control" id="deadline" name='deadline' value={req.deadline} onChange={onchange} minLength={5} required />
                    </div>
                    <div className="my-3">
                        <label htmlFor="email" className="form-label">email</label>
                        <input type="text" className="form-control" id="email" name='email' value={req.email} onChange={onchange} minLength={5} required />
                    </div>
                    <div className="my-3">
                        <label htmlFor="contactNum" className="form-label">contactNum</label>
                        <input type="text" className="form-control" id="contactNum" name='contactNum' value={req.contactNum} onChange={onchange} minLength={5} required />
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