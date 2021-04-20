import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { signOut, verify } from './services/authentication';

import ProtectedRoute from './components/ProtectedRoute';

import CreateProject from './views/project/CreateProject';
import SingleProject from './views/project/SingleProject';
import EditSingleProject from './views/project/EditSingleProject';
import ProjectList from './views/project/ProjectsList';

import CreateResource from './views/resource/CreateResource';
import SingleResource from './views/resource/SingleResource';
import ResourcesList from './views/resource/ResourcesList';
import EditSingleResource from './views/resource/EditSingleResource';

import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import Home from './views/Home';
import ErrorPage from './views/ErrorPage';
import Profile from './views/profile/Profile';
import EditProfile from './views/profile/EditProfile';
import Navbar from './components/Navbar';
// import CreateResource from './views/resource/CreateResource';

export class App extends Component {
  state = {
    user: null,
    loaded: false,
    loggedout: false
  };

  async componentDidMount() {
    const user = await verify();
    this.handleUserChange(user);
    this.setState({ loaded: true });
  }

  handleUserChange = (user) => {
    this.setState({ user });
  };

  handleSignOut = async () => {
    await signOut();
    this.handleUserChange(null);
    this.setState({ loggedout: true });
    //this.props.history.push('/');
  };

  render() {
    const user = this.state.user;
    return (
      <div>
        <Navbar user={user} onSignOut={this.handleSignOut} />

        <main>
          <div className="container">
            {this.state.loaded && (
              <Switch>
                <Route path="/" component={Home} exact />

                <Route
                  path="/project/create"
                  component={CreateProject}
                  redirect="/project/:id"
                  exact
                />

                <Route
                  path="/project/list"
                  component={ProjectList}
                  // redirect="/project/:id"
                  exact
                />
                <Route
                  path="/project/:id"
                  // component={SingleProject}
                  // redirect="/project/:id"
                  render={(props) => (
                    <SingleProject {...props} user={this.state.user} />
                  )}
                  exact
                />

                <Route
                  path="/resource/create"
                  component={CreateResource}
                  redirect="/resource/:id"
                  exact
                />

                <Route
                  path="/resource/list"
                  component={ResourcesList}
                  redirect="/resource/:id"
                  exact
                />

                <Route
                  path="/resource/:id"
                  render={(props) => (
                    <SingleResource
                      {...props}
                      user={this.state.user}
                      //onUserChange={this.handleUserChange}
                    />
                  )}
                  //redirect="/resource/:id"
                  exact
                />

                <Route
                  path="/resource/:id/edit"
                  render={(props) => (
                    <EditSingleResource {...props} user={this.state.user} />
                  )}
                  exact
                />

                <ProtectedRoute
                  path="/sign-in"
                  render={(props) => (
                    <SignIn {...props} onUserChange={this.handleUserChange} />
                  )}
                  authorized={!user}
                  redirect="/"
                  exact
                />
                <ProtectedRoute
                  path="/sign-up"
                  render={(props) => (
                    <SignUp {...props} onUserChange={this.handleUserChange} />
                  )}
                  authorized={!user}
                  redirect="/profile"
                  exact
                />
                <ProtectedRoute
                  path="/profile"
                  render={(props) => (
                    <Profile {...props} user={this.state.user} />
                  )}
                  authorized={user}
                  redirect="/sign-in"
                  exact
                />
                <ProtectedRoute
                  path="/profile/edit"
                  render={(props) => (
                    <EditProfile {...props} user={this.state.user} />
                  )}
                  authorized={user}
                  redirect="/profile"
                  exact
                />
                <Route path="/error" component={ErrorPage} />
                {this.state.loggedout ? (
                  <Redirect to="/" />
                ) : (
                  <Redirect to="/error" />
                )}
                {/* <Redirect to='/error' /> */}
              </Switch>
            )}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
