import React from 'react'
import Require from '../../../../server/Models/Requirements';
import Requirement from './Requirement';

const MyReq = () => {
    const [reqs,setreqs] = useState([]);
    useEffect(() => {
      getmyreq();
    }, [])
    
    const getmyreq = async()=>{
        const response = await fetch('http://localhost:5000/api/v1/getmyreq',{
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                'authtoken': localStorage.getItem('authtoken')
            }
        })
        const json = await response.json();
        console.log(json);
        setreqs(json);
    }
    const updatemyreq = async(Title,Technologies,description,deadline,email,contactNum)=>{
        const response = await fetch('',{
          method:'PUT' ,
            headers: {
                'Content-Type': 'application/json',
                'authtoken': localStorage.getItem('authtoken')
            },
            body:JSON.stringify({Title,Technologies,description,deadline,email,contactNum})
        })
        const json = await response.json();
        let newmyreq  = JSON.parse(JSON.stringify(json));
        for(let index = 0;index<newmyreq.length();index++){
          const element = newmyreq[index];
          if(element._id==id){
            newmyreq[index].Title = Title;
            newmyreq[index].Technologies = Technologies;
            newmyreq[index].description = description;
            newmyreq[index].deadline = deadline;
            newmyreq[index].email = email;
            newmyreq[index].contactNum = contactNum;
          }
        }
        setreqs(reqs);
    }
    const deletemyreq = async(id)=>{
      const response = await fetch('http://localhost:5000/api/v1/',{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'authtoken': localStorage.getItem('authtoken')
        }
        
      })
      const json = await response.json();
      console.log(json);
      const newmyreq = Require.filter((req)=>{return req._id!=id});
    }

  return (
    <div>
      <h1>My Uploaded Requirements</h1>
      {
        reqs.map((req)=>{
          return <Require key={req._id} requirement = {req} updatemyreq = {updatemyreq} deletemyreq = {deletemyreq}/>
        })
      }
    </div>
  )
}

export default MyReq