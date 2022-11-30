import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
    const navigate = useNavigate();
    const handleLogOut = () => {
        if(localStorage.getItem('authtoken')){
            localStorage.removeItem("authtoken")
            navigate('/login')
        }    
    }
    let location = useLocation();
    return (
        <>

            <div className=''>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand " href="#">DEV_GRAM</a>
                    </div>
                </nav>
                <div className='Hello navi tvft'>
                    <div class="btn-group name">
                        <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Developer
                        </button>
                        <ul class="dropdown-menu mennu">
                            <Link className="btn btn-primary mx-1 button" to="/">Developer </Link>
                            <Link className="btn btn-primary mx-1 button" to="/alldevprof" role="button">All developers</Link>
                            <Link className="btn btn-primary mx-1 button" to="/adddprof" role="button">Add Developer</Link>
                            <Link className="btn btn-primary mx-1 button" to="/Myprofile" role="button"> Profile</Link>  </ul>
                    </div>
                    <div class="btn-group name ">
                        <button class="btn btn-secondary btn-lg dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" type="button">
                            Dashboard
                        </button>
                        <ul class="dropdown-menu mennu ">
                            {!localStorage.getItem('authtoken') ? <Link className="btn btn-primary mx-1 button" to="/login" role="button">Log In</Link>
                            :<button type="button" class="btn btn-warning" onClick={handleLogOut}> Log out</button>}
                            {!localStorage.getItem('authtoken')  && 
                                                        <Link className="btn btn-primary mx-1 button" to="/signup" role="button">Sign Up</Link>}
                            <Link className="btn btn-primary mx-1 button" to="/aboutus" role="button">About us</Link>
                            <Link className="btn btn-primary mx-1 button" to="/" role="button">User Profile</Link>  </ul>
                    </div>
                    <div class="btn-group name">
                        <button class="btn btn-secondary btn-lg dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" type="button">
                            Requirements
                        </button>
                        <ul class="dropdown-menu mennu">
                            <Link className="btn btn-primary mx-1 button" to="/addreq" role="button">Add  Requirement</Link>
                            <Link className="btn btn-primary mx-1 button" to="/myreq" role="button">Get My requirement</Link>
                            <Link className="btn btn-primary mx-1 button" to="/allreq" role="button">Get all Requirement</Link>
                            <Link className="btn btn-primary mx-1 button" to="/" role="button">DashBoard</Link>  </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar