import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

import SignUp from './views/SignUp';
import Home from './views/Home';
import ErrorPage from './views/ErrorPage';
import CreateResource from './views/resource/CreateResource';

// import Navbar from './components/Navbar';

export class App extends Component {
  state = {
    user: null,
    loaded: false
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/sign-up" component={SignUp} redirect="/" exact />
            <Route path="/error" component={ErrorPage} />
            <Route
              path="/resource/create"
              component={CreateResource}
              redirect="/resource/:id"
              exact
            />
            {/* <ProtectedRoute
              Route
              path="/resource/create"
              component={CreateResource}
              exact
              authorized={this.state.user}
            /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
