import './App.css';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import Alldevelopers from './components/Developer/Alldevelopers';
import Login from './components/Auth/Login';
import Navbar from './components/Navbar';
import DevState from './context/developers/DevState';
import Alert from './components/Alert';
import DashBoard from './components/DashBoard';
import SignUp from './components/Auth/SignUp';
import AddProf from './components/Developer/AddDevProf';
import MyProfiles from './components/Developer/MyDevProfiles';
import AddRequirement from './components/Requirements/AddRequirement';
import MyReq from './components/Requirements/MyReq';
import Allrequirements from './components/Requirements/Allrequirements';
function App() {
  return (
    <>
      <DevState>
        <BrowserRouter>
          <Navbar />
          {/* <Alert/> */}
          <div className='container'>
            <Routes>
              <Route exact path = "/" element = {<DashBoard/>}/>
              <Route exact path = "/about"element = {<AboutUs />}/>
              <Route exact path ="/login" element={<Login/>}/>
              <Route exact path = "/signup" element={<SignUp/>} />
              <Route exact path = "/alldevprof" element={<Alldevelopers/>}  />
              <Route exact path = "/aboutus"element={<AboutUs/>}/>
              <Route exact path = "/adddprof" element ={<AddProf/>}/>
              <Route exact path = "/Myprofile" element ={<MyProfiles/>}/>
              
              <Route exact path='/addreq' element={<AddRequirement/>}/>
              <Route exact path='/myreq' element={<MyReq/>}/>
              <Route exact path='/allreq' element={<Allrequirements/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </DevState>
    </>
  );
}

export default App;
