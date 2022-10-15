import './App.css';
import AboutUs from './components/AboutUs';
import Alldevelopers from './components/Alldevelopers';
import Navbar from './components/Navbar';
import DevState from './context/developers/DevState';

function App() {
  return (
    <>
    <DevState>
      <Navbar/>
      <Alldevelopers/>
      <AboutUs/>
    </DevState>
    </>
  );
}

export default App;
