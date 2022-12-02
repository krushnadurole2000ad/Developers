import React, { useContext, useEffect,useState } from 'react'
import DevContext from '../../context/developers/DevContext'
import Devcontext from '../../context/developers/DevContext'
const UserProfile = (props) => {
    const { user , updateuser } = props
    const context = useContext(DevContext)
    const {deletenote} = context;
    const [profile,setprofile] = useState(user);
    useEffect(() => {
      console.log(user);
      setprofile(user);
    }, [])
    
    return (
        <div>
           {
                user? <div class="card-body">
                <h2>User Profile</h2>
                <div className='col-md-3'>
                    <div className="c ard my-3">
                        <div className="cardj-body">
                            <img src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png" class="card-img-top" alt="..." />
                            {/* <div>{user.name}</div> */}
                            <div>{profile.name}</div>
                            {/* <div>{user.email}</div> */}
                            <div>{profile.email}</div>
                            <div></div>
                            <i className="fa-solid fa-pen-to-square mx-2" onClick={() => { updateuser(user) }}></i>
                            <i className="fa-solid fa-trash-can  mx-2" onClick={() => { deletenote(user._id); props.showAlert("Deleted successfully", "success"); }}></i>
                        </div>
                    </div>
                </div>
            </div>:<h2>please wait
                
            </h2>
           }
        </div>
    )
}

export default UserProfile