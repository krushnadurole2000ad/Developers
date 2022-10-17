import React, { useContext, useState } from 'react'
import DevContext from '../context/developers/DevContext'
const AddProf = () => {

    const context = useContext(DevContext);
    const {addprof} = context;
    const [Dev,Setdev] = useState({name:"",email:"",role:"",contactNum:"",description:"",github:"",linkedin:"",resumelink:"",achievements:""});
    const handleclick = (e)=>{
        e.preventDefault();
        addprof(Dev.name,Dev.email,Dev.role,Dev.contactNum,Dev.description,Dev.github,Dev.linkedin,Dev.resumelink,Dev.achievements);
        Setdev({name:"",email:"",role:"",contactNum:"",description:"",github:"",linkedin:"",resumelink:"",achievements:""})
    }
    const onchange = (e)=>{
        Setdev({...Dev,[e.target.name]:[e.target.value]})
    }
// add the developer
  return (
    <div>
        <div className='my-3'>
            <h1>Add Your Developer Profile</h1>
            <form className='my-3'>
                <div className='mb-3'>
                    <label htmlFor='name' className='form-label'>Name</label>
                    <input type="text"  className='form-control'aria-describedby="emailHelp" value={Dev.name}  id='name' name='name' onchange={onchange} minLength={5} required />
                </div>  
                <div className='my-3'>
                    <label htmlFor='email' className='form-label'> Email </label>
                    <input type='text' className='form-control' aria-describedby='emailHelp' value={Dev.email} id='email' name='email' onchange={onchange} minLength={5} required/>
                </div>
                <div className='my-3'>
                    <label htmlFor='role' className='form-label'> Email </label>
                    <input type='text' className='form-control' aria-describedby='emailHelp' value={Dev.role} id='role' name='role' onchange={onchange} minLength={5} required/>
                </div>
                <div className='my-3'>
                    <label htmlFor='contactNum' className='form-label'> contactNum </label>
                    <input type='text' className='form-control' aria-describedby='emailHelp' value={Dev.contactNum} id='email' name='contactNum' onchange={onchange} minLength={5} required/>
                </div>
                <div className='my-3'>
                    <label htmlFor='description' className='form-label'> Description </label>
                    <input type='text' className='form-control' aria-describedby='emailHelp' value={Dev.description} id='description' name='description' onchange={onchange} minLength={5} required/>
                </div>

                <div className='my-3'>
                    <label htmlFor='github' className='form-label'> github </label>
                    <input type='text' className='form-control' aria-describedby='emailHelp' value={Dev.github} id='github' name='github' onchange={onchange} minLength={5} required/>
                </div>
                <div className='my-3'>
                    <label htmlFor='linkedin' className='form-label'> linkedin </label>
                    <input type='text' className='form-control' aria-describedby='emailHelp' value={Dev.linkedin} id='linkedin' name='linkedin' onchange={onchange} minLength={5} required/>
                </div>
                <div className='my-3'>
                    <label htmlFor='resumelink' className='form-label'> resumelink </label>
                    <input type='text' className='form-control' aria-describedby='emailHelp' value={Dev.resumelink} id='resumelink' name='resumelink' onchange={onchange} minLength={5} required/>
                </div>
                <div className='my-3'>
                    <label htmlFor='achievements' className='form-label'> achievements </label>
                    <input type='text' className='form-control' aria-describedby='emailHelp' value={Dev.achievements} id='achievements' name='achievements' onchange={onchange} minLength={5} required/>
                </div>
                <button onClick={handleclick}>Add My Developer Profile</button>
            </form>
        </div>
    </div>
  )
}

export default AddProf