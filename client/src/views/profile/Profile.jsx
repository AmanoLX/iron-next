import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

class Profile extends Component {
	render() {
		const { name, profilePicture } = this.props.user;
		return (
			<div className='container'>
				<h1>Profile Page for {name}</h1>
				<img src={profilePicture} alt={name} className='profile-img' />
				<Link to='/profile/edit'>
					<button className='btn btn-outline-secondary'>Edit Profile</button>
				</Link>
			</div>
		);
	}
}
export default Profile;
