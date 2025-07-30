import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GeneralInfo from "./components/GeneralInfo";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <div className="App">
      <h1>CV Builder</h1>
      <GeneralInfo data={generalInfo} onChange={setGeneralInfo} />
    </div>
  );
}

export default App;
