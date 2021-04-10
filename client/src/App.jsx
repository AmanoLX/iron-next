import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom';
import SignUp from './views/SignUp';
import Home from './views/Home';
import ErrorPage from './views/ErrorPage';

// import Navbar from './components/Navbar';

export class App extends Component {
  render() {
    return (
      <div>
        Hi welcome
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/sign-up" component={SignUp} redirect="/" exact />
            <Route path="/error" component={ErrorPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
