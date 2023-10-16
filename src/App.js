import "./App.css";
import Alert from "./components/Alert";
import NavBar from "./components/NavBar";
import { useState } from "react";
import { Outlet } from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      showAlert("Dark Mode has been enabled", "Danger");
      
    }else{
      setMode('light');
      showAlert("Light Mode has been enabled", "Success");
    }
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
    //console.log(alert);
  }
  
  return (
    <>
      <NavBar title="Pavankumar Kokane" mode={mode} toggleMode={toggleMode}/>
      <Alert  alert={alert} />
      <div className="container">
        <div className="mt-5">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
