import Home from "./Pages/Home";
import "./styles.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route element={<Home/>} path="/"/>
      </Routes>


    </div>
  );
}

export default App;
