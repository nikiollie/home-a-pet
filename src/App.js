import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navigation/NavBar"
import Home from "./views/home"
import About from "./views/about"
import How from "./views/how"
import Adopt from "./views/adopt"
import Filter from "./views/filter"
import Care from "./views/care"
import Results from "./views/results"
import Favorites from "./views/favorites"
import Login from "./views/login"
import Logout from "./views/logout"
import Cookies from 'js-cookie';
import myaccount from "./views/myaccount"
import PetDetails from './views/petdetails';

function App() {

  const [loggedIn, setLoggedIn] = useState(
    Cookies.get('login')
  )
  console.log(Cookies.get('login'))

  return (
    <Router>
      <NavBar {...{loggedIn}} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/how' component={How} />
        <Route path='/filter' component={Filter} />
        <Route path='/adopt' component={Adopt} />
        <Route path='/care' component={Care} />
        <Route path='/results' component={Results} />
        <Route path='/favorites' component={Favorites} />
        <Route path='/petdetails' component={PetDetails} />
        <Route path='/myaccount' component={myaccount} />
        <Route path='/login' render={
          (routeProps) => <Login {...{setLoggedIn, ...routeProps}} /> } />
        <Route path='/logout' render={
          (routeProps) => <Logout {...{setLoggedIn, ...routeProps}} /> } />
      </Switch>
    </Router>
  );
}

export default App;
