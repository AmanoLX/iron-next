import React, { Component } from 'react';
import { verify } from './../services/authentication';

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
				<div className='card form-card bg-light py-3 px-5 w-100'>
					<div className='row g-0'>
						{(user && <h1>Welcome back {user.name}</h1>) || (
							<div className='card-body'>
								<h1>Welcome to Iron-next</h1>
								<h6>
									The platform where former Ironhack graduates keep on learning,
									creating an sharing.
								</h6>
							</div>
						)}
					</div>
				</div>
			</section>
		);
	}
}

export default Home;
