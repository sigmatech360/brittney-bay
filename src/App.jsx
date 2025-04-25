import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";


import AppRouter from './Router/AppRouter'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 300,
    });
  }, []);

  return (
    <>
      <AppRouter />
    </>
  )
}

export default App
