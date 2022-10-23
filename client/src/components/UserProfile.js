import React from 'react'

const UserProfile = (props) => {
    const { user, updateuser } = props
    return (
        <div>
            <div class="card-body">
                <h2>User Profile</h2>
                <div className='col-md-3'>
                    <div className="c ard my-3">
                        <div className="card-body">
                            <img src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png" class="card-img-top" alt="..." />
                            <div>{user.name}</div>
                            <div>{user.email}</div>
                            {/* <i className="fa-solid fa-trash-can  mx-2" onClick={() => { deletenote(user._id); props.showAlert("Deleted successfully", "success"); }}></i> */}
                            <i className="fa-solid fa-pen-to-square mx-2" onClick={() => { updateuser(user) }}></i>
                            {/* <p className="card-text">{note.description}</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile