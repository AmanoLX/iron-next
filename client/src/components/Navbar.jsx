import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ user, onSignOut }) => {
	return (
		<>
			<nav className='navbar fixed-top navbar-expand-lg navbar-light bg-light'>
				<div className='container-fluid'>
					<Link className='navbar-brand' to='/'>
						Iron-next
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNavDropdown'
						aria-controls='navbarNavDropdown'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarNavDropdown'>
						<ul className='navbar-nav'>
							<li className='nav-item dropdown text-white'>
								<Link
									className='nav-link dropdown-toggle text-dark'
									to='#'
									id='navbarDropdownMenuLink'
									role='button'
									data-bs-toggle='dropdown'
									aria-expanded='false'>
									Projects
								</Link>
								<ul
									className='dropdown-menu'
									aria-labelledby='navbarDropdownMenuLink'>
									<li>
										<Link className='dropdown-item' to='/project/list'>
											All Projects
										</Link>
									</li>
									{user && (
										<>
											<li>
												<Link className='dropdown-item' to='/project/create'>
													Create Project
												</Link>
											</li>
										</>
									)}
								</ul>
							</li>
							<li className='nav-item dropdown text-white'>
								<Link
									className='nav-link dropdown-toggle text-dark'
									to='#'
									id='navbarDropdownMenuLink'
									role='button'
									data-bs-toggle='dropdown'
									aria-expanded='false'>
									Resources
								</Link>
								<ul
									className='dropdown-menu'
									aria-labelledby='navbarDropdownMenuLink'>
									<li>
										<Link className='dropdown-item' to='/resource/list'>
											All Resources
										</Link>
									</li>
									{user && (
										<>
											<li>
												<Link className='dropdown-item' to='/resource/create'>
													Create Resource
												</Link>
											</li>
										</>
									)}
								</ul>
							</li>
						</ul>
						{(user && (
							<ul className='navbar-nav w-100 d-flex text-dark justify-content-end'>
								<div className='d-flex flex-row align-items-center'>
									<li className='nav-item'>Welcome {user.name}</li>
									{user.profilePicture && (
										<li className='nav-item'>
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
							<ul className='navbar-nav w-100 d-flex justify-content-end'>
								<li className='nav-item'>
									<Link className='nav-link' to='/sign-in'>
										<button className='btn btn-secondary'>Sign In</button>
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
