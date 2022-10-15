import './App.css';
import Alldevelopers from './components/Alldevelopers';
import Navbar from './components/Navbar';
import DevState from './context/developers/DevState';

function App() {
  return (
    <>
    <DevState>
      <Navbar/>
      <Alldevelopers/>
    </DevState>
    </>
  );
}

export default App;
