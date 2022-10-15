import React, { useContext, useEffect, useState } from 'react'
import DevContext from '../context/developers/DevContext';
import Developer from './Developer';
const Alldevelopers = () => {
  const context = useContext(DevContext);
  const { getdev, devs } = context;
  // const [dev,setdev] = useState();
  useEffect(() => {
    getdev();
  }, [])
  const updatedev = ()=>{
    
  }
  return (
    <>
      <h1 class="display-1">All Developers</h1>
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