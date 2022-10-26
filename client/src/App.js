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
            </Routes>
          </div>
        </BrowserRouter>
      </DevState>
    </>
  );
}

export default App;
