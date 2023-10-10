import "./App.css";
import NavBar from "./components/NavBar";
import UpperCase from "./components/UpperCase";

function App() {
  return (
    <>
      <NavBar title="Pavankumar Kokane" />
      <div className="container">
        <div className="mt-5">
          <UpperCase title="UpperCase Converter" />
        </div>
      </div>
    </>
  );
}

export default App;
