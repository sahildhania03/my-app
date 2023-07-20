import "./App.css";
// import Navbar from "./Mycomponents/Navbar";
import NavbarCwh from "./Mycomponents/NavbarCwh";
import Textarea from "./Mycomponents/Textarea";
import React, {useState} from "react";
import CwhAlert from "./Mycomponents/CwhAlert";
// import About from './Mycomponents/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState('');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      // document.body.style.backgroundColor="#212529"
      document.body.style.backgroundColor = "#4f4e4d";
      showAlert(": Dark mode has been enabled","success");
      document.title="TextUtils-DarkMode";
      // showAlert("Dark mode has been enabled","success")
      
      
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(": light mode has been enabled","success");
      document.title="TextUtils-LightMode";

      // showAlert("Light mode has been enabled","success")
    }
    // const handleBlue=()=>{
    //   document.body.style.backgroundColor="blue"
    // }
  };
  return (
    <>
      {/* <Navbar title="Blog_z"/> */}
      {/* <Router> */}
      <NavbarCwh title={"TextUtils"} Mode={mode} togglemode={toggleMode} />
      <CwhAlert Alert={alert}/>
      <div className="container my-3">
        {/* <Routes>
          <Route exact path="/about" element={<About />}>
          </Route> */}
          {/* <Route exact path="/" element={ */}
          <Textarea heading="Enter Your Text To Analyse" Mode={mode} />
          {/* }> */}
            
          {/* </Route>
        </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
