import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavbarSignedOut = () => {
	return (
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
					<ul className='navbar-nav ml-auto '>
						<li className='nav-item'>
							<Link className='nav-link' to='/sign-in'>
								<button className='btn btn-secondary mr-2'>Sign In</button>
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/sign-up'>
								<button className='btn btn-outline-secondary'>Sign Up</button>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavbarSignedOut;
