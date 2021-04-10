import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const MainNavbar = () => {
	return (
		<Navbar bg='dark' variant='dark' expand='lg'>
			<Navbar.Brand href='/'>Iron-Next</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='justify-content-end'>
					<Nav.Link href='/sign-in'>Sign In</Nav.Link>
					<Nav.Link href='/sign-up'>Sign Up</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default MainNavbar;
