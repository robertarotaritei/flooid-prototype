import { observer } from 'mobx-react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import NavigationBar from "./components/NavigationBar";
import Dashboard from "./components/Dashboard";
import React, { useEffect } from 'react';
import Information from './components/Information';
import About from './components/About';
import LoginForm from './components/LoginForm';

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "gray"
  });
  return (
    <div className="App">
      <Router>
        <NavigationBar/>
        <Switch>
          <Route exact path="/home" component={() => (<Dashboard />)} />
          <Route exact path="/information" render={() => (<Information/>)} />
          <Route exact path="/about" render={() => (<About/>)} />
          <Route exact path="/login" render={() => (<LoginForm/>)} />
          <Route exact path="/register" render={() => (<div>Nice</div>)} />
          <Route exact path="/*" render={() => (<Redirect to="/home" />)} />
        </Switch>
      </Router>
    </div>
  );
}

export default observer(App);
