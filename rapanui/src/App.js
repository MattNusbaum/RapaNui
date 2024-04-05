import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout";
import Navbar from "./components/Navbar";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Navbar/>
      <Home/>
      <div className="App">
        <header className="App-header">

          <Layout />
        </header>
      </div>
    </Router>
  );
}

export default App;
