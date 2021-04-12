import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { signOut, verify } from './services/authentication';

import ProtectedRoute from './components/ProtectedRoute';

import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import Home from './views/Home';
import Profile from './views/profile/Profile';
import Navbar from './components/Navbar';

export class App extends Component {
	state = {
		user: null,
		loaded: false,
	};

	async componentDidMount() {
		const user = await verify();
		this.handleUserChange(user);
		this.setState({ loaded: true });
	}

	handleUserChange = user => {
		this.setState({ user });
	};

	handleSignOut = async () => {
		await signOut();
		this.handleUserChange(null);
	};

	render() {
		const user = this.state.user;
		return (
			<div>
				<BrowserRouter>
					<Navbar user={user} onSignOut={this.handleSignOut} />

					<main>
						<div className='container mt-5'>
							{this.state.loaded && (
								<Switch>
									<Route path='/' component={Home} exact />
									<ProtectedRoute
										path='/sign-in'
										render={props => (
											<SignIn {...props} onUserChange={this.handleUserChange} />
										)}
										authorized={!user}
										redirect='/'
										exact
									/>
									<ProtectedRoute
										path='/sign-up'
										render={props => (
											<SignUp {...props} onUserChange={this.handleUserChange} />
										)}
										authorized={!user}
										redirect='/'
										exact
									/>
									<ProtectedRoute
										path='/profile'
										render={props => (
											<Profile {...props} user={this.state.user} />
										)}
										authorized={user}
										redirect='/sign-in'
										exact
									/>
								</Switch>
							)}
						</div>
					</main>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
