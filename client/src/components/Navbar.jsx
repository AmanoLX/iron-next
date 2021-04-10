import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<Link to='/'>
				<strong>IronNext</strong>
			</Link>
			<>
				<Link to='/sign-in'>Sign In</Link>
				<Link to='/sign-up'>Sign Up</Link>
			</>
		</nav>
	);
};

export default Navbar;
