import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

import AppRouter from "./Router/AppRouter";
import { useEffect } from "react";

function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 0,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
