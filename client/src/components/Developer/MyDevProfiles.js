import React, { useState, useEffect, useRef, useContext } from 'react'
import Developer from '../Developer/Developer';
import { useNavigate } from 'react-router-dom';

const MyProfiles = (props) => {
    const ref = useRef(null);
    const refclose = useRef(null);
    const navigate = useNavigate();
    const [devs, setdevs] = useState([]);
    const [dev, setdev] = useState({ id: "", eemail: "", eecontact: "", eedescr: "", egithub: "", elink: "" });
    const [flag,setflag] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('authtoken')) {
          getprofile();
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
        props.showAlert("Updated Successfully","success");
    }
    const onchange = (e) => {
        setdev({ ...dev, [e.target.name]: e.target.value });
    }
    const getprofile = async () => {
        const response = await fetch('https://developerrvit.onrender.com/api/v1/fetchuserprofile', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authtoken': localStorage.getItem('authtoken')
            }
        })
        const json = await response.json();
        console.log(json);
        setdevs(json);
    }
    const updatedev = async (id, name, email, contactNum, description, github, linkedin) => {
        const response = await fetch(`https://developerrvit.onrender.com/api/v1/updateprofile/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'authtoken': localStorage.getItem('authtoken')
            },
            body: JSON.stringify({ name, email, contactNum, description, github, linkedin })
        })
        const json = await response.json();
        let newdevs = JSON.parse(JSON.stringify(devs));
        for (let index = 0; index < newdevs.length; index++) {
            const element = newdevs[index];
            if (element._id === id) {
                newdevs[index].name = name;
                newdevs[index].email = email;
                newdevs[index].contactNum = contactNum;
                newdevs[index].description = description;
                newdevs[index].github = github;
                newdevs[index].linkedin = linkedin;
                break;
            }
        }
        setdevs(newdevs);
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
                            <button onClick={handleclick} type="button" className="btn btn-primary">Update Dev</button>
                        </div>
                    </div>
                </div>
            </div>
            <h1>My Developer Profiles</h1>
            {
                devs.map((dev) => {
                    return <Developer key={dev._id} developer={dev}  updateDev={updateDev} flag = {flag}/>
                })
            }
        </div>
    )
}

export default MyProfiles











// const deletedev = async (id) => {
//     const response = await fetch(`https://developerrvit.onrender.com/api/v1/delete/${id}`, {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//             'authtoken': localStorage.getItem('authtoken')
//         },
//     });
//     const json = await response.json();
//     console.log(json);
//     const newdev = devs.filter((dev) => { return dev._id !== id });
//     setdevs(devs);
// }




// const updateprofile = async(id,name,email,role,contactNum,description,github,linkedin,resumelink,achievements)=>{
//     const response = await fetch('https://developerrvit.onrender.com/api/v1/updateprofile',{
//         method:'PUT' ,
//         headers: {
//             'Content-Type': 'application/json',
//             'authtoken': localStorage.getItem('authtoken')
//         },
//         body:JSON.stringify({name,email,role,contactNum,description,github,linkedin,resumelink,achievements})
//     })
//     const json = await response.json();
//     let newdev = json.parse(json.stringify(profile));
//     for(let index =0;index<newdev.length;index++){
//         const element = newdev[index];
//         if(element._id===id){
//             newdev[index].name = name;
//             newdev[index].email = email;
//             newdev[index].role = role;
//             newdev[index].contactNum = contactNum;
//             newdev[index].description = description;
//             newdev[index].github = github;
//             newdev[index].linkedin = linkedin;
//             newdev[index].resumelink = resumelink;
//             newdev[index].achievements = achievements;
//         }
//     }
//     setprofile(profile);
// }


// const deleteprofile = async (id) => {
//     const response = await fetch(`https://developerrvit.onrender.com/api/v1/delete/${id}`, {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//             'authtoken': localStorage.getItem('authtoken')
//         },
//     })
//     const json = await response.json();
//     console.log(json);
//     const newdev = profile.filter((dev) => { return dev._id !== id });
//     setprofile(newdev);
// }