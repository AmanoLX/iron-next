import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
// import NavbarSignedOut from './components/NavbarSignedOut';
// import NavbarSignedIn from './components/NavbarSignedIn';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import Profile from './views/profile/Profile';

export class App extends Component {
	state = {
		user: null,
	};

	// async componentDidMount() {
	//   const user = await verify();
	//   this.handleUserChange(user);
	//   this.setState({ loaded: true });
	// }

	handleUserChange = user => {
		this.setState({ user });
	};

	render() {
		return (
			<div>
				<BrowserRouter>
					{/* <NavbarSignedOut />
					<NavbarSignedIn /> */}
					<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
						<div className='container-fluid'>
							<Link className='navbar-brand' to='/'>
								Iron-next
							</Link>
							<button
								className='navbar-toggler'
								type='button'
								data-bs-toggle='collapse'
								data-bs-target='#navbarNav'
								aria-controls='navbarNav'
								aria-expanded='false'
								aria-label='Toggle navigation'>
								<span className='navbar-toggler-icon'></span>
							</button>
							<div className='collapse navbar-collapse' id='navbarNav'>
								{(this.state.user && (
									<ul className='navbar-nav ml-auto  text-white d-flex align-items-center'>
										<li className='nav-item mr-2'>
											Welcome {this.state.user.name}
										</li>
										<li className='nav-item'>
											<Link className='nav-link' to='/profile'>
												<button className='btn btn-secondary mr-2'>
													Profile
												</button>
											</Link>
										</li>
										<li className='nav-item'>
											<Link className='nav-link' to='/sign-up'>
												<button className='btn btn-outline-secondary'>
													Sign Out
												</button>
											</Link>
										</li>
									</ul>
								)) || (
									<ul className='navbar-nav ml-auto '>
										<li className='nav-item'>
											<Link className='nav-link' to='/sign-in'>
												<button className='btn btn-secondary mr-2'>
													Sign In
												</button>
											</Link>
										</li>
										<li className='nav-item'>
											<Link className='nav-link' to='/sign-up'>
												<button className='btn btn-outline-secondary'>
													Sign Up
												</button>
											</Link>
										</li>
									</ul>
								)}
							</div>
						</div>
					</nav>

					<Switch>
						{/* <Route path="/" component={Home} exact /> */}
						<Route
							path='/sign-in'
							render={props => (
								<SignIn {...props} onUserChange={this.handleUserChange} />
							)}
							redirect='/'
							exact
						/>
						<Route
							path='/sign-up'
							render={props => (
								<SignUp {...props} onUserChange={this.handleUserChange} />
							)}
							redirect='/'
							exact
						/>
						<Route
							path='/profile'
							render={props => <Profile {...props} user={this.state.user} />}
							exact
						/>
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
