import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Topbar from "./Components/Topbar";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Info from "./Pages/Info";
import PokemonDetail from "./Pages/PokemonDetail";

function App() {
  return (
    <Router>
      <div className="main-container">
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="info" element={<Info />} />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
