import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Utilities/utilities.css";
import HomePage from "./Pages/Homepage/HomePage";
import VideoSection from "./Pages/VideoSection/VideoSection"

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/*Ctrl + click to check different Sections */}
      <Routes>
        <Route exact path="/" element={<HomePage></HomePage>}></Route>
        <Route exact path="/" element={<VideoSection></VideoSection>}></Route>
      </Routes>


    </>
  );
}

export default App;
