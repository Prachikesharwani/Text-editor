import React , { useState} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // const removeBodyClasses=()=>{
  //   document.body.classList.remove("bg-light")
  //   document.body.classList.remove("bg-dark")
  //   document.body.classList.remove("bg-primary")
  //   document.body.classList.remove("bg-success")
  //   document.body.classList.remove("bg-danger")
  //   document.body.classList.remove("bg-warning")
  // }

  const toggleMode = () => {
    // removeBodyClasses();
    // console.log(cls);
    // document.body.classList.add("bg-"+cls)
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
      <TextForm
              heading="Try TextUtils- Word counter, Character counter, Remove extra spaces"
              mode={mode}
              showAlert={showAlert}
            />
      </div>
    </>
  );
}

export default App;