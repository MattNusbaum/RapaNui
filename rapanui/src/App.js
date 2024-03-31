import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Layout />
        </header>
      </div>
    </Router>
  );
}

export default App;
