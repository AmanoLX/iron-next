import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
	render() {
		return (
			<div className='container'>
				<h1>Profile Page for {this.props.user.name}</h1>
				<Link to='/profile/edit'>
					<button className='btn btn-outline-secondary'>Edit Profile</button>
				</Link>
			</div>
		);
	}
}
export default Profile;
