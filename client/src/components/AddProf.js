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
                    <label htmlFor='title' className='form-label'>Name</label>
                    <input type="text"  className='form-control'aria-describedby="emailHelp" value={Dev.name}  id='name' name='name' onchange={onchange} minLength={5} required />
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddProf