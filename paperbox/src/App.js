import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./pages/Home"

function App() {
  return (
    <div>
    <BrowserRouter>
      <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/signup" component={Signup} /> */}
      </Switch> 
    </BrowserRouter>
    </div>
  );
}

export default App;
