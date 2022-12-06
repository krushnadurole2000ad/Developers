import React, { useState, useEffect, useRef, useContext } from 'react'
import Developer from '../Developer/Developer';
import { useNavigate } from 'react-router-dom';
import './mydev.css'
const MyProfiles = (props) => {
    const ref = useRef(null);
    const refclose = useRef(null);
    const navigate = useNavigate();
    const [devs, setdevs] = useState([]);
    const [dev, setdev] = useState({ id: "",eename:"", eemail: "",erole:"", eecontact: "", eedescr: "", egithub: "", elink: "",eresumelink:"",eachievements:"" });
    const [flag,setflag] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('authtoken')) {
          getprofile();
        }
        else {
          navigate('/login')
        }
      }, [])
    //   const [dev, setdev] = useState({ id: "",eename:"", eemail: "",erole:"", eecontact: "", eedescr: "", egithub: "", elink: "",eresumelink:"",eachievements:"" });
    const updateDev = (curdev) => { 
        ref.current.click();
        setdev({ id: curdev._id,  eename:curdev.name , eemail: curdev.email, erole:curdev.role,eecontact: curdev.contactNum, eedescr: curdev.description,egithub: curdev.github,elink: curdev.linkedin, eresumelink:curdev.resumelink,   eachievements:curdev.achievements })
    }
    const handleclick = (e) => {
        updatedev(dev.id, dev.eename,dev.eemail,dev.erole, dev.eecontact, dev.eedescr, dev.egithub, dev.elink,dev.eresumelink,dev.eachievements);
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
    const updatedev = async (id, name, email,role, contactNum, description, github, linkedin,resumelink,achievements) => {
        const response = await fetch(`https://developerrvit.onrender.com/api/v1/updateprofile/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'authtoken': localStorage.getItem('authtoken')
            },
            body: JSON.stringify({ name, email,role, contactNum, description, github, linkedin,resumelink,achievements })
        })
        const json = await response.json();
        let newdevs = JSON.parse(JSON.stringify(devs));
        for (let index = 0; index < newdevs.length; index++) {
            const element = newdevs[index];
            if (element._id === id) {
                newdevs[index].name = name;
                newdevs[index].email = email;
                newdevs[index].role = role;
                newdevs[index].contactNum = contactNum;
                newdevs[index].description = description;
                newdevs[index].github = github;
                newdevs[index].linkedin = linkedin;
                newdevs[index].resumelink = resumelink;
                newdevs[index].achievements = achievements;
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

                                {/* name */}
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="ename" name='ename' value={dev.eename} onChange={onchange} />
                                </div>
                                {/* email  */}
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="eemail" name='eemail' aria-describedby="emailHelp" value={dev.eemail} onChange={onchange} minLength={5} required />
                                </div>
                                
                                {/* role */}
                                <div className="mb-3">
                                    <label htmlFor="role" className="form-label">Role</label>
                                    <input type="text" className="form-control" id="erole" name='erole' value={dev.erole} onChange={onchange} />
                                </div>
                                {/* Contact num */}
                                <div className="mb-3">
                                    <label htmlFor="contactNum" className="form-label">contactNum</label>
                                    <input type="text" className="form-control" id="econtactNum" name='econtactNum' value={dev.eecontact} onChange={onchange} />
                                </div>
                                {/* description  */}
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="eedescr" name='eedescr' value={dev.eedescr} onChange={onchange} minLength={5} required />
                                </div>
                                {/* github */}
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Github</label>
                                    <input type="text" className="form-control" id="egithub" name='egithub' value={dev.egithub} onChange={onchange} />
                                </div>
                                {/* linkedin */}
                                <div className="mb-3">
                                    <label htmlFor="linkedin" className="form-label">linkedin</label>
                                    <input type="text" className="form-control" id="elinkedin" name='elinkedin' value={dev.elink} onChange={onchange} />
                                </div>
                                {/* resumelink */}
                                <div className="mb-3">
                                    <label htmlFor="resumelink" className="form-label">resumelink</label>
                                    <input type="text" className="form-control" id="eresumelink" name='eresumelink' value={dev.eresumelink} onChange={onchange} />
                                </div>
                                {/* achievements */}
                                <div className="mb-3">
                                    <label htmlFor="achievements" className="form-label">Achievements</label>
                                    <input type="text" className="form-control" id="eachievements" name='eachievements' value={dev.eachievements} onChange={onchange} />
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
            <h1 className='namee'>My Developer Profiles</h1>
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