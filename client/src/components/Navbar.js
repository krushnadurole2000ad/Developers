import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
    return (
        <>

            {/* <!-- Large button groups (default and split) --> */}
           <div className='Hello'>
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
                <button class="btn btn-secondary btn-lg dropdown-toggle"data-bs-toggle="dropdown" aria-expanded="false" type="button">
                    DashBoard
                </button>
                <ul class="dropdown-menu mennu ">
                    <Link className="btn btn-primary mx-1 button" to="/login" role="button">Log In</Link>
                    <Link className="btn btn-primary mx-1 button" to="/signup" role="button">Sign Up</Link>
                    <Link className="btn btn-primary mx-1 button" to="/aboutus" role="button">About us</Link>
                    <Link className="btn btn-primary mx-1 button" to="/" role="button">User Profile</Link>  </ul>
            </div>
            <div class="btn-group name">
                <button class="btn btn-secondary btn-lg dropdown-toggle"data-bs-toggle="dropdown" aria-expanded="false" type="button">
                    Require
                </button>
                <ul class="dropdown-menu mennu">
                    <Link className="btn btn-primary mx-1 button" to="/addreq" role="button">Add  Requirement</Link>
                    <Link className="btn btn-primary mx-1 button" to="/myreq" role="button">Get My requirement</Link>
                    <Link className="btn btn-primary mx-1 button" to="/allreq" role="button">Get all Requirement</Link>
                    <Link className="btn btn-primary mx-1 button" to="/" role="button">DashBoard</Link>  </ul>
            </div>
           </div>

            {/* <div class=" dropdown row Hello btn-group">
               
                <div className="dropdown name">
                    <button class="btn Hello btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                        Third
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                        <Link className="nbtn btn-primary mx-1 button" to="/">Developer </Link>
                        <Link className="btn btn-primary mx-1 button" to="/alldevprof" role="button">All developers</Link>
                        <Link className="btn btn-primary mx-1 button" to="/adddprof" role="button">Add Developer Profile</Link>
                        <Link className="btn btn-primary mx-1 button" to="/Myprofile" role="button"> Profile</Link>
                    </ul>
                </div>
                <div className="dropdown name">
                    <button class="btn Hello btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                        Third
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                        <Link className="nbtn btn-primary mx-1 button" to="/">Developer </Link>
                        <Link className="btn btn-primary mx-1 button" to="/alldevprof" role="button">All developers</Link>
                        <Link className="btn btn-primary mx-1 button" to="/adddprof" role="button">Add Developer Profile</Link>
                        <Link className="btn btn-primary mx-1 button" to="/Myprofile" role="button"> Profile</Link>
                    </ul>
                </div>
                <div className="dropdown name">
                    <button class="btn Hello btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                        Third
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                    <Link className="btn btn-primary mx-1 button" to="/login" role="button">Log In</Link>
                        <Link className="btn btn-primary mx-1 button" to="/signup" role="button">Sign Up</Link>
                        <Link className="btn btn-primary mx-1 button" to="/aboutus" role="button">About us</Link>
                        <Link className="btn btn-primary mx-1 button" to="/" role="button">User Profile</Link>
                    </ul>
                </div>
            </div> */}
        </>
    )
}

export default Navbar