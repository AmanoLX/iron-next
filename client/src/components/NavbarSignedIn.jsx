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
					<ul className='navbar-nav mr-auto '>
						<li className='nav-item'>
							<Link className='nav-link' to='/project'>
								Projects
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/resource'>
								Resources
							</Link>
						</li>
					</ul>
					<ul className='navbar-nav ml-auto '>
						<li className='nav-item'>
							<Link className='nav-link' to='/profile'>
								<button className='btn btn-secondary mr-2'>Profile</button>
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/'>
								<button className='btn btn-outline-secondary'>Sign Out</button>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavbarSignedOut;
