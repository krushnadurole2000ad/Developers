import React, { useContext, useState , useEffect } from 'react'
import DevContext from '../../context/developers/DevContext'
import '../Developer/AddDevProf.css'
import { useNavigate } from 'react-router-dom';
const AddProf = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('authtoken')) {
        }
        else {
          navigate('/login')
        }
      }, [])
    
    const context = useContext(DevContext);
    const { addprof } = context;
    const [Dev, Setdev] = useState({ name: "", email: "", role: "", contactNum: "", description: "", github: "", linkedin: "", resumelink: "", achievements: "" });
    const handleclick = (e) => {
        e.preventDefault();
        addprof(Dev.name, Dev.email, Dev.role, Dev.contactNum, Dev.description, Dev.github, Dev.linkedin, Dev.resumelink, Dev.achievements);
        Setdev({ name: "", email: "", role: "", contactNum: "", description: "", github: "", linkedin: "", resumelink: "", achievements: "" })
        props.showAlert("Added successfully", "success");
    }
    const onchange = (e) => {
        Setdev({ ...Dev, [e.target.name]: e.target.value })
    }
    // add the developer
    return (
        <div>
            <div className='my-3 f'>
                <h1 className='namee'>Add Your Developer Profile</h1>
                <form className='my-3 f'>
                    <div className="my-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name='name' aria-describedby="emailHelp" value={Dev.name} onChange={onchange} minLength={5} required />
                    </div>
                    <div className="my-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" value={Dev.email} onChange={onchange} minLength={5} required />
                    </div>
                    <div className="my-3">
                        <label htmlFor="role" className="form-label">role</label>
                        <input type="text" className="form-control" id="role" name='role' value={Dev.role} onChange={onchange} minLength={5} required />
                    </div>
                    <div className="my-3">
                        <label htmlFor="contactNum" className="form-label">contactNum</label>
                        <input type="text" className="form-control" id="contactNum" name='contactNum' value={Dev.contactNum} onChange={onchange} minLength={5} required />
                    </div>
                    <div className="my-3">
                        <label htmlFor="contactNum" className="form-label">description</label>
                        <input type="text" className="form-control" id="description" name='description' value={Dev.description} onChange={onchange} minLength={5} required />
                    </div>
                    <div className="my-3">
                        <label htmlFor="github" className="form-label">github</label>
                        <input type="text" className="form-control" id="github" name='github' value={Dev.github} onChange={onchange} minLength={5} required />
                    </div>
                    <div className="my-3">
                        <label htmlFor="linkedin" className="form-label">linkedin</label>
                        <input type="text" className="form-control" id="linkedin" name='linkedin' value={Dev.linkedin} onChange={onchange} minLength={5} required />
                    </div>
                    <div className="my-3">
                        <label htmlFor="resumelink" className="form-label">resumelink</label>
                        <input type="text" className="form-control" id="resumelink" name='resumelink' value={Dev.resumelink} onChange={onchange} minLength={5} required />
                    </div>
                    <div className="my-3">
                        <label htmlFor="achievements" className="form-label">achievements</label>
                        <input type="text" className="form-control" id="achievements" name='achievements' value={Dev.achievements} onChange={onchange} minLength={5} required />
                    </div>





                    {/* <button onClick={handleclick}>Add My Developer Profile</button> */}
                    <button type="button" onClick={handleclick} class="btn btn-outline-success">Add My Developer Profile</button>

                </form>
            </div>
        </div>
    )
}

export default AddProf