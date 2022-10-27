import React, { useEffect } from 'react'

// component to present all the avaialble requirements. 
const Allrequirements = () => {
  const [reqs, setreqs] = useState({ postedby: "", Title: "", Technologies: "", description: "", deadline: "", email: "", contactNum: "" })
  
  useEffect(() => {
    getreq();
  }, [])
  return (
    <div>
      <h1>Allrequirements</h1>

    </div>
  )
}

export default Allrequirements