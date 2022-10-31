import React, { useState, useEffect } from 'react'
import Developer from '../Developer/Developer';

const MyProfiles = () => {
    const [profile, setprofile] = useState([]);
    useEffect(() => {
        getprofile()
    }, [])

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
        setprofile(json);
    }
    const updateprofile = async(id,name,email,role,contactNum,description,github,linkedin,resumelink,achievements)=>{
        const response = await fetch('https://developerrvit.onrender.com/api/v1/updateprofile',{
            method:'PUT' ,
            headers: {
                'Content-Type': 'application/json',
                'authtoken': localStorage.getItem('authtoken')
            },
            body:JSON.stringify({name,email,role,contactNum,description,github,linkedin,resumelink,achievements})
        })
        const json = await response.json();
        let newdev = json.parse(json.stringify(profile));
        for(let index =0;index<newdev.length;index++){
            const element = newdev[index];
            if(element._id===id){
                newdev[index].name = name;
                newdev[index].email = email;
                newdev[index].role = role;
                newdev[index].contactNum = contactNum;
                newdev[index].description = description;
                newdev[index].github = github;
                newdev[index].linkedin = linkedin;
                newdev[index].resumelink = resumelink;
                newdev[index].achievements = achievements;
            }
        }
        setprofile(profile);
    }
    const deleteprofile = async (id) => {
        const response = await fetch(`https://developerrvit.onrender.com/api/v1/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'authtoken': localStorage.getItem('authtoken')
            },
        })
        const json = await response.json();
        console.log(json);
        const newdev = profile.filter((dev) => { return dev._id !== id });
        setprofile(newdev);
    }
    return (
        <div>
            <h1>My Developer Profiles : </h1>
            {
                profile.map((dev) => {
                    return <Developer key={dev._id} developer={dev} deleteprofile = {deleteprofile} updateprofile={updateprofile} />
                })
            }
        </div>
    )
}

export default MyProfiles