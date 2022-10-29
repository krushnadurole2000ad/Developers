import React, { useEffect } from 'react'

const UserProfile = (props) => {
    const { user , updateuser } = props
    useEffect(() => {
      console.log(user);
    }, [])
    
    return (
        <div>
            <div class="card-body">
                <h2>User Profile</h2>
                <div className='col-md-3'>
                    <div className="c ard my-3">
                        <div className="cardj-body">
                            <img src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png" class="card-img-top" alt="..." />
                            <div>{user.name}</div>
                            <div>{user.email}</div>
                            <div></div>
                            <i className="fa-solid fa-pen-to-square mx-2" onClick={() => { updateuser(user) }}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile