import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainNavbar from './components/MainNavbar';
import SignUp from './views/SignUp';

export class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<MainNavbar />
					<Switch>
						{/* <Route path="/" component={Home} exact /> */}
						<Route path='/sign-up' component={SignUp} redirect='/' exact />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
