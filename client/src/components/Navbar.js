import React,{useState,useEffect} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import DevContext from '../context/developers/DevContext';
import "./Navbar.css"
const Navbar = () => {
    const navigate = useNavigate();
    useEffect(() => {
        getuser();
    }, [])
    
    const handleLogOut = () => {
        if(localStorage.getItem('authtoken')){
            localStorage.removeItem("authtoken")
            navigate('/login')
        }    
    }
    const [user, setuser] = useState({ id: "", ename: "", eemail: "" });
    // const context = DevContext;
    // const {user}  = context;
    let location = useLocation();
    const getuser = async () => {
        const response = await fetch('https://developerrvit.onrender.com/api/v1/veryhelpful', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'authtoken': localStorage.getItem('authtoken')
          },
          body: JSON.stringify()
        })
        const json = await response.json();
        console.log(json);
        setuser(json);
      }
    return (
        <>

            <div className=''>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand " href="#">DEV_GRAM </a><span className='email'>{user.email}</span>
                    </div>
                </nav>
                <div className='Hello navi tvft'>
                    <div class="btn-group name">
                        <button class="btn btn-secondary btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Developer                         
                        </button>
                        <ul class="dropdown-menu mennu">
                            {/* <Link className="btn btn-primary mx-1 button" to="/">Developer </Link> */}
                            <Link className="btn btn-primary mx-1 button" to="/alldevprof" role="button">All developers</Link>
                            <Link className="btn btn-primary mx-1 button" to="/adddprof" role="button">Add Developer</Link>
                            <Link className="btn btn-primary mx-1 button" to="/Myprofile" role="button"> MyDevProfiles</Link>  </ul>
                    </div>
                    <div class="btn-group name ">
                        <button class="btn btn-secondary btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" type="button">
                            Dashboard
                        </button>
                        <ul class="dropdown-menu mennu ">
                            {!localStorage.getItem('authtoken') ? <Link className="btn btn-primary mx-1 button" to="/login" role="button">Log In</Link>
                            :<button type="button" class="btn btn-warning buttonn" onClick={handleLogOut}> Log out</button>}
                            {!localStorage.getItem('authtoken')  && 
                                                        <Link className="btn btn-primary mx-1 button" to="/signup" role="button">Sign Up</Link>}
                                                        <br></br>
                            <Link className="btn btn-primary mx-1 button trial" to="/aboutus" role="button">About us</Link>
                            <Link className="btn btn-primary mx-1 button trial" to="/" role="button">User Profile</Link>  </ul>
                    </div>
                    <div class="btn-group name">
                        <button class="btn btn-secondary btn-info dropdown-toggle bnt" data-bs-toggle="dropdown" aria-expanded="false" type="button">
                            Requirements
                        </button>
                        <ul class="dropdown-menu mennu">
                            <Link className="btn btn-primary mx-1 button" to="/addreq" role="button">Add  Requirement</Link>
                            <Link className="btn btn-primary mx-1 button" to="/myreq" role="button">Get My requirement</Link>
                            <Link className="btn btn-primary mx-1 button" to="/allreq" role="button">Get all Requirement</Link>
                            {/* <Link className="btn btn-primary mx-1 button" to="/" role="button">DashBoard</Link>   */}
                            </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar