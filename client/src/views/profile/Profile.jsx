import React, { Component } from 'react';

class Profile extends Component {
	render() {
		return (
			<div className='container'>
				<h1>Profile Page for {this.props.user.name}</h1>
			</div>
		);
	}
}
export default Profile;
