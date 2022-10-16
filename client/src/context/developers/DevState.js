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
    // delete developer
    // update developer
    return (
        <div>
            <DevContext.Provider value = {{getdev,devs}}>
                {props.children}
            </DevContext.Provider>
        </div>
    )
}

export default DevState;

