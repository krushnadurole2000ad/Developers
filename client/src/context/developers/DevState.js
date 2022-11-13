import React, { useContext, useState } from "react";
import axios from 'axios';

import DevContext from "./DevContext";
const host = process.env.HOST;

const DevState = (props) => {

    const Devintial = [];
    const [devs,setdevs]=useState(Devintial);
    // function to fetch all the developers from the database.
    const getdev = async () => {
        const response = await fetch('https://developerrvit.onrender.com/api/v1/getalldevelopers', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authtoken':localStorage.getItem('authtoken')
            }
        })
        const json = await response.json();
        console.log(json);
        setdevs(json);
    }
    // add developer
    const addprof = async (name,email,role,contactNum,description,github,linkedin,resumelink,achievements) =>{
        const response = await fetch(`https://developerrvit.onrender.com/api/v1/adddevelopers`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
                'authtoken':localStorage.getItem('authtoken')

            },
            body:JSON.stringify({name,email,role,contactNum,description,github,linkedin,resumelink,achievements})
        })
        const dev = await response.json();
        console.log("Adding a  developer profile. ");
        setdevs(devs.concat(dev));
    }
    // delete developer
    // update developer













    // Routes handling for the requirements entity. 
    const reqintial = [];
    const [reqs,setreqs] = useState(reqintial)
    const getreq = async () => {
        // const response = await fetch('https://developerrvit.onrender.com/api/v1/getallrequire', {
        const response = await fetch('http://localhost:5000/api/v1/getallrequire', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'authtoken': localStorage.getItem('authtoken')
          }
        })
        const json = await response.json();
        console.log(json);
        setreqs(json);
      }

      const addrequire = async (Title,Technologies,description,deadline,email,contactNum) =>{
        const response = await fetch(`https://developerrvit.onrender.com/api/v1/addrequire`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
                'authtoken': localStorage.getItem('authtoken')
                
            },
            body:JSON.stringify({Title,Technologies,description,deadline,email,contactNum})
        })
        const req = await response.json();
        console.log("Adding a  Requirement profile");
        setreqs(reqs.concat(req));
    }
    const UpdateReq = async(id,Title,Technologies,description,deadline,email,contactNum)=>{
        
        const response = await fetch(`http://localhost:5000/api/v1/updatereq/${id}`,{
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'authtoken': localStorage.getItem('authtoken')
            },
            body:JSON.stringify({Title,Technologies,description,deadline,email,contactNum})
        })
        const json = await response.json();
        let newreq = JSON.parse(JSON.stringify(json));

        for(let index = 0;index<newreq.length;index++){
            const element = newreq[index];
            if(element._id===id){
                newreq[index].Title = Title;
                newreq[index.description] = description;
                newreq[index.deadline] = deadline;
                newreq[index.email] = email;
                newreq[index.contactNum] = contactNum;
                break;
            }
            setreqs(newreq);
            console.log("setreqs : newreq")
        }
    }
    
    return (
        <div>
            <DevContext.Provider value = {{getdev,devs,addprof,getreq,addrequire,reqs,UpdateReq}}>
                {props.children}
            </DevContext.Provider>
        </div>
    )
}














export default DevState;

