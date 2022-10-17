import './App.css';
import { Routes,Route,Router } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Alldevelopers from './components/Alldevelopers';
import Login from './components/Login';
import Navbar from './components/Navbar';
import DevState from './context/developers/DevState';
import Alert from './components/Alert';
import DashBoard from './components/DashBoard';
import SignUp from './components/SignUp';
function App() {
  return (
    <>
      <DevState>
        <Router>
          <Navbar />
          <Alert/>
          <div className='container'>
            <Routes>
              <Route exact path = "/" element = {<DashBoard/>}/>
              <Route exact path = "/about" element = {<AboutUs />}/>
              <Route exact path ="/login"element={<Login/>}/>
              <Route exact path = "/signup" element={<SignUp/>} />
              <Route exact path = "/alldevprof"/> <Alldevelopers />
              <AboutUs />
            </Routes>
          </div>
        </Router>
        <AboutUs/>
      </DevState>
    </>
  );
}

export default App;
