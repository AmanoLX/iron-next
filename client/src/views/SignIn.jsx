// Change for our project

import React, { Component } from 'react';
import { signIn } from './../services/authentication';

class SignIn extends Component {
	state = {
		email: '',
		password: '',
	};

	handleFormSubmission = async event => {
		event.preventDefault();
		const { email, password } = this.state;
		const user = await signIn({ email, password });
		console.log(user);
		this.props.onUserChange(user);
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	};

	render() {
		return (
			<main>
				<div className='container mt-5'>
					<header>
						<h1>Sign In</h1>
					</header>
					<form onSubmit={this.handleFormSubmission}>
						<div className='row g-3'>
							{/* Email */}
							<div className='col-md-6 mb-3'>
								<label htmlFor='email-input' className='form-label'>
									Email
								</label>
								<input
									className='form-control'
									type='email'
									id='email-input'
									aria-describedby='email'
									name='email'
									required
									value={this.state.email}
									onChange={this.handleInputChange}
								/>
							</div>
							{/* Password */}
							<div className='col-md-6 mb-4'>
								<label htmlFor='password-input' className='form-label'>
									Password
								</label>
								<input
									className='form-control'
									id='password-input'
									type='password'
									name='password'
									required
									value={this.state.password}
									onChange={this.handleInputChange}
								/>
							</div>
						</div>

						<div className='d-grid'>
							<button className='btn btn-primary' type='submit'>
								Sign In
							</button>
						</div>
					</form>
				</div>
			</main>
		);
	}
}

export default SignIn;
