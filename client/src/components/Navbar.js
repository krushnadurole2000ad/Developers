import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
    
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Developer </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                         <form className="d-flex" role="search">
                            <Link className="btn btn-primary mx-1" to="/login" role="button">Log In</Link>
                            <Link className="btn btn-primary mx-1" to="/signup" role="button">Sign Up</Link>
                            <Link className="btn btn-primary mx-1" to="/alldevprof" role="button">All developers</Link>
                            <Link className="btn btn-primary mx-1" to="/aboutus" role="button">About us</Link>
                            <Link className="btn btn-primary mx-1" to="/adddprof" role="button">Add Developer Profile</Link>
                            <Link className="btn btn-primary mx-1" to="/" role="button">User Profile</Link>
                            <span><button className="btn btn-primary mx-1">Log Out</button></span>
                        </form> : 
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar