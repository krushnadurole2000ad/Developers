import './App.css';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Alldevelopers from './components/Alldevelopers';
import Login from './components/Login';
import Navbar from './components/Navbar';
import DevState from './context/developers/DevState';
import Alert from './components/Alert';
import DashBoard from './components/DashBoard';
import SignUp from './components/SignUp';
import AddProf from './components/AddProf';
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
            </Routes>
          </div>
        </BrowserRouter>
      </DevState>
    </>
  );
}

export default App;
