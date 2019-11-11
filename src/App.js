import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Random from './containers/random';
import Home from './containers/home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/random-recipe" component={Random} />
      </BrowserRouter>
    </div>
  );
}

export default App;
