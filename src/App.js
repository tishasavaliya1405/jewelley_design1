import logo from './logo.svg';
import './App.css';
import Rout_file from './Comp/Rout_file';
import { useEffect } from 'react';
import "aos/dist/aos.css";
import Aos from 'aos';

function App() {
  useEffect(() => {
    Aos.init();
  },[]);
  return (
    <>
    <Rout_file />
    </>
  );
}

export default App;
