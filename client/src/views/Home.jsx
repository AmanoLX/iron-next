import React, { Component } from 'react';
import { verify } from './../services/authentication';
import { Link } from 'react-router-dom';
import homeImgNot from './../images/home-not-loggedin.jpg';

class Home extends Component {
	state = {
		user: null,
	};

	async componentDidMount() {
		const user = await verify();
		this.setState({ user });
	}

	render() {
		const { user } = this.state;

		return (
			<section className='d-flex justify-content-center align-items-center'>
				{(user && (
					<div class='row'>
						<div className='col-md-7 d-flex flex-column'>
							<h1 className='mb-5'>
								Team up and build interdisciplinary projects with the help of
								Ironhack graduates from around the world.
							</h1>
							<h4 className='mb-5'>
								For bootcamp graduates who want to keep learning, sharing and
								take on the tech world together.
							</h4>
							<div>
								<Link to='/project/create'>
									<div className='btn btn-primary btn-lg me-3'>
										Create Project
									</div>
								</Link>
								<Link to='/resource/create'>
									<div className='btn btn-primary-outline btn-lg'>
										Share Resource
									</div>
								</Link>
							</div>
						</div>
						<div className='col-md-5'>
							<img src={homeImgNot} alt='' />
						</div>
					</div>
				)) || (
					<div class='row'>
						<div className='col-md-7 d-flex flex-column'>
							<h1 className='mb-5'>
								Team up and build interdisciplinary projects with the help of
								Ironhack graduates from around the world.
							</h1>
							<h4 className='mb-5'>
								For bootcamp graduates who want to keep learning, sharing and
								take on the tech world together.
							</h4>
							<div>
								<Link to='/sign-up'>
									<div className='btn btn-primary btn-lg me-3'>Start now</div>
								</Link>
								<Link to='/sign-in'>
									<div className='btn btn-primary-outline btn-lg'>Sign in</div>
								</Link>
							</div>
						</div>
						<div className='col-md-5'>
							<img src={homeImgNot} alt='' />
						</div>
					</div>
				)}
			</section>
		);
	}
}

export default Home;
