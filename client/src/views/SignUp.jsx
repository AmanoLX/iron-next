import React, { Component } from 'react';

import { signUp } from './../services/authentication';

class SignUp extends Component {
	state = {
		name: '',
		email: '',
		password: '',
		profilePicture: '',
	};

	handleFormSubmission = async event => {
		event.preventDefault();
		const { name, email, password, profilePicture } = this.state;

		const user = await signUp({ name, email, password, profilePicture });
		console.log(user);
		this.props.onUserChange(user);

		// const data = new FormData();
		// const values = { name, email, password, profilePicture };
		// for (let key in values) {
		// 	data.append(key, values[key]);
		// }
		// const user = await signUp(data);
		// this.props.onUserChange(user);
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	};

	handleFileInputChange = event => {
		const { name, files } = event.target;
		const file = files[0];
		this.setState({
			[name]: file,
		});
	};

	render() {
		return (
			<main>
				<div className='container mt-5'>
					<header>
						<h1>Sign Up</h1>
					</header>

					<form onSubmit={this.handleFormSubmission}>
						<div className='mb-3'>
							<label htmlFor='name-input' className='form-label'>
								Name
							</label>
							<input
								className='form-control'
								type='text'
								id='name-input'
								aria-describedby='name'
								name='name'
								required
								value={this.state.name}
								onChange={this.handleInputChange}
							/>
						</div>

						<div className='row g-3'>
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

							<div className='col-md-6 mb-3'>
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

						<div className='custom-file mb-4'>
							<label className='custom-file-label' for='customFile'>
								Choose a Profile Picture
							</label>
							<input
								type='file'
								className='custom-file-input'
								id='profile-picture-input'
								name='profilePicture'
								onChange={this.handleFileInputChange}
							/>
						</div>

						{/* <label htmlFor='input-picture'>Picture</label>
						<input
							id='input-picture'
							type='file'
							name='picture'
							onChange={this.handleFileInputChange}
						/> */}

						{/* <div className='mb-4'>
							<label htmlFor='graduate-input'>
								Are you a Web Developer or a Designer?
							</label>
							<select
								className='form-select'
								aria-label='Default select example'
								id='graduate-input'
								name='graduateType'
								required
								value={this.state.graduateType}
								onChange={this.handleInputChange}>
								<option disabled>Choose:</option>
								<option value='WebDev Graduate'>Web Developer</option>
								<option value='UX/UI Graduate'>Designer</option>
							</select>
						</div> */}

						<div className='d-grid'>
							<button className='btn btn-primary' type='submit'>
								Sign Up
							</button>
						</div>
					</form>
				</div>
			</main>
		);
	}
}

export default SignUp;
