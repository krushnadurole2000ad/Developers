import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
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
import { useState } from 'react';
function App() {
  const [alert, SetAlert] = useState(null);
  const showAlert = (message, type) => {
    SetAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      SetAlert(null);
    }, 1500);
  }
  return (
    <>
      <DevState>
        <BrowserRouter>
          <Navbar />
          <Alert alert={alert} />
          <div className='container'>
            <Routes>
              <Route exact path="/" element={<DashBoard showAlert={showAlert} />} />
              <Route exact path="/about" element={<AboutUs />} />
              <Route exact path="/login" element={<Login showAlert={showAlert} />} />
              <Route exact path="/signup" element={<SignUp showAlert={showAlert} />} />
              <Route exact path="/alldevprof" element={<Alldevelopers showAlert={showAlert} />} />
              <Route exact path="/aboutus" element={<AboutUs />} />
              <Route exact path="/adddprof" element={<AddProf showAlert={showAlert} />} />
              <Route exact path="/Myprofile" element={<MyProfiles showAlert={showAlert} />} />
              <Route exact path="/addreq" element={<AddRequirement showAlert={showAlert} />} />
              <Route exact path="/myreq" element={<MyReq showAlert={showAlert} />} />
              <Route exact path="/allreq" element={<Allrequirements showAlert={showAlert} />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DevState>
    </>
  );
}

export default App;
