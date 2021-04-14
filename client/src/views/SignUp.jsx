import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

		// const user = await signUp({ name, email, password, profilePicture });
		// console.log(user);
		// this.props.onUserChange(user);

		const data = new FormData();
		const values = { name, email, password, profilePicture };
		for (let key in values) {
			data.append(key, values[key]);
		}
		const user = await signUp(data);
		console.log(user);
		this.props.onUserChange(user);
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
		const { name, email, password } = this.state;
		return (
			<section className='d-flex justify-content-center align-items-center'>
				<div className='card form-card bg-light'>
					<div className='row g-0'>
						<div className='col-md-7 card-content p-5'>
							<div className='card-body'>
								<h1 className='card-title text-center mb-5'>Sign Up</h1>
								<form onSubmit={this.handleFormSubmission}>
									<div className='row g-3'>
										{/* Name */}
										<div>
											<label htmlFor='name-input' className='form-label'>
												Name
											</label>
											<input
												className='form-control'
												type='name'
												id='name-input'
												aria-describedby='name'
												name='name'
												required
												value={name}
												onChange={this.handleInputChange}
											/>
										</div>
										{/* Email */}
										<div>
											<label htmlFor='email-input' className='form-label'>
												Email address
											</label>
											<input
												className='form-control'
												type='email'
												id='email-input'
												aria-describedby='email'
												name='email'
												required
												value={email}
												onChange={this.handleInputChange}
											/>
										</div>
										{/* Password */}
										<div className='mb-2'>
											<label htmlFor='password-input' className='form-label'>
												Password
											</label>
											<input
												className='form-control'
												id='password-input'
												type='password'
												name='password'
												required
												value={password}
												onChange={this.handleInputChange}
											/>
										</div>
										<div className='d-grid mb-5'>
											<button className='btn btn-secondary' type='submit'>
												Sign In
											</button>
										</div>
										<p class='card-text text-center'>
											<small class='text-muted d-block'>
												Don't have an account?
												<Link to='/sign-up'> Create one</Link>
											</small>
										</p>
									</div>
								</form>
							</div>
						</div>
						<div className='col-md-5 card-image-col d-flex justify-content-center align-items-center'>
							<img
								class='img-fluid'
								src='https://www.mswipe.com/assets/images/signin_marchant_mswipe_Illustrations.svg'
								alt='signin'></img>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default SignUp;
