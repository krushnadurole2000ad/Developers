import React, { useContext, useEffect, useState } from 'react'
import context from '../../context/developers/DevContext';
import Developer from './Developer';
import '../Developer/Alldevelopers.css'
const Alldevelopers = () => {
  const { getdev, devs } = useContext(context);

  useEffect(() => {
    getdev();
  }, [])
  const updatedev = ()=>{
    
  }
  return (
    <>
      <div className="ht"><h1>All Developers</h1></div>
      <div className="container mx-2">
        {devs.length === 0 && "No Developers to Display 🥺🥺🥺"}
      </div>
      {devs.map((dev) => {
        return <Developer key={dev._id} developer={dev} updatedev={updatedev} />
      })}
    </>
  )
}

export default Alldevelopers