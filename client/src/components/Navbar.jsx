import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, onSignOut }) => {
	return (
		<>
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
						{(user && (
							<ul className='navbar-nav w-100 text-white d-flex align-items-center justify-content-between'>
								<div className='d-flex flex-row align-items-center'>
									<li className='nav-item'>
										<Link className='nav-link' to='/resource/create'>
											Create Project
										</Link>
									</li>
									<li className='nav-item'>
										<Link className='nav-link' to='/resource/create'>
											Create Resource
										</Link>
									</li>
								</div>
								<div className='d-flex flex-row align-items-center'>
									<li className='nav-item mr-2'>Welcome {user.name}</li>
									{user.profilePicture && (
										<li className='nav-item mr-2'>
											<img
												src={user.profilePicture}
												alt={user.name}
												className='profile-picture'></img>
										</li>
									)}
									<li className='nav-item'>
										<Link className='nav-link' to='/profile'>
											<button className='btn btn-secondary mr-2'>
												Profile
											</button>
										</Link>
									</li>
									<li className='nav-item'>
										<Link className='nav-link' to='/sign-out'>
											<button
												className='btn btn-outline-secondary'
												onClick={onSignOut}>
												Sign Out
											</button>
										</Link>
									</li>
								</div>
							</ul>
						)) || (
							<ul className='navbar-nav ml-auto '>
								<li className='nav-item'>
									<Link className='nav-link' to='/sign-in'>
										<button className='btn btn-secondary mr-2'>Sign In</button>
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
		</>
	);
};

export default Navbar;
