import React from 'react';
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";


function App() {
  return (
    <div>
      <Home/>
    </div>
  )
}

export default App;
