import React from "react"
import Home from "./components/Home"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Impress from "./components/ImPress"
import About from "./components/About"

function App() {
  return (
    <>
    <Router>
    <Routes>
          
          <Route path="/" element={<Home />}  exact/>
          <Route path="/Impress" element={<Impress />} exact />
          <Route path="/About" element={<About/>} exact />
    </Routes>
      </Router>
    </>
  );
}

export default App;
