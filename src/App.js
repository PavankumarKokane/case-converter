import "./App.css";
import NavBar from "./components/NavBar";
import UpperCase from "./components/UpperCase";
import { useState } from "react";


function App() {

  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
    }else{
      setMode('light');
    }
  }
  return (
    <>
      <NavBar title="Pavankumar Kokane" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
        <div className="mt-5">
          <UpperCase title="UpperCase Converter" />
        </div>
      </div>
    </>
  );
}

export default App;
