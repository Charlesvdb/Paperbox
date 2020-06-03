import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./pages/Home"
import Planetdetail from "./pages/Planetdetail"

function App() {
  return (
    <div>
    <BrowserRouter>
      <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/info" component={Planetdetail} />
      </Switch> 
    </BrowserRouter>
    </div>
  );
}

export default App;
