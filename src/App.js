import React from 'react';
import './App.css';

import { Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/pages/Home";

function App() {
  return <Route path="/" component = {Home}/>;
}

export default App;
