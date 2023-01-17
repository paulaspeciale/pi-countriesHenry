import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import LandingPage from './components/LandingPage/LandingPage';
import  Home from './components/Home/Home'
import PageNotFound from './components/PageNotFound/PageNotFound';
import DetailCountry from './components/DetailCountry/DetailCountry';
import CreateActivity from './components/CreateActivity/CreateActivity';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
         <Switch>
          <Route exact path={"/"} component={LandingPage}/>
          <Route exact path={"/home"} component={Home}/>
          <Route exact path={"/countries/:id"} component={DetailCountry}/>
          <Route exact path={"/create"} component={CreateActivity}/>
          <Route component={PageNotFound}/>
        
        </Switch>
           </div>
      </BrowserRouter>
  );
}

export default App;
