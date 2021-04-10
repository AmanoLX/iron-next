// Change for our project

import React, { Component } from 'react';
import { signUp } from './../services/authentication';

class SignUp extends Component {
	state = {
		name: '',
		email: '',
		password: '',
		graduateType: '',
	};

	handleFormSubmission = async event => {
		event.preventDefault();
		const { name, email, password, graduateType } = this.state;
		const user = await signUp({ name, email, password, graduateType });
		console.log(user);
		//this.props.onUserChange(user);
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
				<header>
					<h1>Sign Up</h1>
				</header>
				<form onSubmit={this.handleFormSubmission}>
					<label htmlFor='name-input'>Name</label>
					<input
						id='name-input'
						type='text'
						placeholder='James Dean'
						name='name'
						required
						value={this.state.name}
						onChange={this.handleInputChange}
					/>

					<label htmlFor='email-input'>Email</label>
					<input
						id='email-input'
						type='email'
						placeholder='james@example.com'
						name='email'
						required
						value={this.state.email}
						onChange={this.handleInputChange}
					/>

					<label htmlFor='graduate-input'>
						Are you a Designer or a Web Developer?
					</label>
					<select
						id='graduate-input'
						name='graduateType'
						required
						value={this.state.graduateType}
						onChange={this.handleInputChange}>
						<option value='' disabled>
							Designer or Web Dev?
						</option>
						<option value='UX/UI Graduate'>UX/UI Design</option>
						<option value='WebDev Graduate'>Web Development</option>
					</select>

					<label htmlFor='password-input'>Password</label>
					<input
						id='password-input'
						type='password'
						placeholder='A secure password'
						name='password'
						required
						value={this.state.password}
						onChange={this.handleInputChange}
					/>

					<button>Sign Up</button>
				</form>
			</main>
		);
	}
}

export default SignUp;
