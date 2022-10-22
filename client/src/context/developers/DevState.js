import React, { useContext, useState } from "react";
import axios from 'axios';

import DevContext from "./DevContext";
const host = process.env.HOST;

const DevState = (props) => {
    const Devintial = [];
    const [devs,setdevs]=useState(Devintial);
    // function to fetch all the developers from the database.
    const getdev = async () => {
        const response = await fetch('http://localhost:5000/api/v1/getalldevelopers', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json();
        console.log(json);
        setdevs(json);
    }
    // add developer
    const addprof = async (name,email,role,contactNum,description,github,linkedin,resumelink,achievements) =>{
        const response = await fetch(`http://localhost:5000/api/v1/adddevelopers`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({name,email,role,contactNum,description,github,linkedin,resumelink,achievements})
        })
        const dev = await response.json();
        console.log("Adding a  developer profile. ");
        setdevs(devs.concat(dev));
    }
    // delete developer
    // update developer
    return (
        <div>
            <DevContext.Provider value = {{getdev,devs,addprof}}>
                {props.children}
            </DevContext.Provider>
        </div>
    )
}

export default DevState;

