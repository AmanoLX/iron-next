import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
		const { email, password } = this.state;
		return (
			<section className='d-flex justify-content-center align-items-center'>
				<div className='card form-card bg-light'>
					<div className='row g-0'>
						<div className='col-md-5 card-image-col d-flex justify-content-center align-items-center'>
							<img
								className='img-fluid'
								src='https://www.mswipe.com/assets/images/signin_marchant_mswipe_Illustrations.svg'
								alt='signin'></img>
						</div>
						<div className='col-md-7 card-content p-5'>
							<div className='card-body'>
								<h1 className='card-title text-center mb-3'>Welcome back</h1>
								<form onSubmit={this.handleFormSubmission}>
									<div className='row g-3'>
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
										<div>
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
										<p className='card-text text-center'>
											<small className='text-muted d-block'>
												Don't have an account?
												<Link to='/sign-up'> Create one</Link>
											</small>
										</p>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default SignIn;
