import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import SignUp from './views/SignUp';
import CreateProject from '././views/project/CreateProject';
import SingleProject from '././views/project/SingleProject';
// import Navbar from './components/Navbar';

export class App extends Component {
  state = {
    user: null,
    loaded: false
  };

  //   async componentDidMount() {
  //     const user = await verify();
  //     this.handleUserChange(user);
  //     this.setState({ loaded: true });
  //   }

  //   handleUserChange = (user) => {
  //     this.setState({ user });
  //   };

  //   handleSignOut = async () => {
  //     await signOut();
  //     this.handleUserChange(null);
  //   };

  render() {
    return (
      <div>
        Let's see if this works ...
        <BrowserRouter>
          <h1>IRONNEXT</h1>

            <Switch>
              {/* <Route path="/" component={Home} exact /> */}
              {/* <Route path="/sign-up" component={SignUp} redirect="/" exact /> */}

              <Route
                path="/project/create"
                component={CreateProject}
                // authorized={user}
                // redirect="/sign-in"
                exact
              />

              <Route path="/project/:id" component={SingleProject} exact />
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
