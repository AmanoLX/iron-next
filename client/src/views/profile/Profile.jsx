import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import MyProjects from './../../components/MyProjects';

class Profile extends Component {
	render() {
		const {
			name,
			profilePicture,
			bio,
			city,
			country,
			graduateType,
			yearOfGraduation,
			githubURL,
			linkedInURL,
		} = this.props.user;
		return (
			<section className='d-flex justify-content-center align-items-center'>
				<div className='card form-card bg-light py-3 px-5 w-100'>
					<div className='row g-0'>
						<div className='card-body'>
							<div className='row justify-content-between'>
								{/* COL LEFT */}
								<div className='col-md-4 pe-5 border-end border-secondary'>
									<div className='d-flex flex-column align-items-center mb-5 text-center'>
										{(profilePicture && (
											<img
												src={profilePicture}
												alt={name}
												className='profile-img mb-3'
											/>
										)) || (
											<img
												src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png'
												alt={name}
												className='profile-img mb-3'
											/>
										)}

										<h3>Hi {name}!</h3>
									</div>

									{/* Buttons */}
									<div className='d-grid gap-2'>
										<Link to='/profile/'>
											<button
												className='btn btn-outline-secondary w-100'
												type='button'>
												Dashboard
											</button>
										</Link>
										<Link to='/profile/'>
											<button
												className='btn btn-outline-secondary w-100'
												type='button'>
												My Projects
											</button>
										</Link>
										<Link to='/profile/'>
											<button
												className='btn btn-outline-secondary w-100'
												type='button'>
												My Resources
											</button>
										</Link>
										<Link to='/profile/edit'>
											<button
												className='btn btn-outline-secondary w-100'
												type='button'>
												Edit Profile
											</button>
										</Link>
										<Link to='/profile/edit'>
											<button
												className='btn btn-outline-secondary w-100'
												type='button'>
												Delete Profile
											</button>
										</Link>
									</div>
								</div>

								{/* COL RIGHT */}
								<div className='col-md-8 ps-5'>
									<div className='bio d-flex flex-column justify-content-between mb-5 border-bottom border-secondary pb-3'>
										<h2>Bio</h2>
										{(bio && (
											<p>
												Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Fugiat est, omnis voluptas sapiente distinctio sequi
												aperiam necessitatibus sed quis voluptates corrupti,
												maiores placeat excepturi ipsa incidunt aliquid esse
												quisquam. Perspiciatis ad aliquam reprehenderit
												voluptatum quaerat vero praesentium nobis!
											</p>
										)) || (
											<div className='mb-3'>
												<p>No bio yet. Complete your profile right now.</p>
												<Link to='/profile/edit'>
													<button
														className='btn btn-outline-secondary'
														type='button'>
														Edit Profile
													</button>
												</Link>
											</div>
										)}
										{city && country && (
											<h5>
												Location: <span>Lisbon,</span> <span>Portugal</span>
											</h5>
										)}

										{graduateType && <h6>Course followed: {graduateType}</h6>}
										{yearOfGraduation && (
											<h6>Graduated in: {yearOfGraduation}</h6>
										)}

										{/* Social Media Icons */}
										<ul class='list-group list-group-horizontal'>
											<li className='me-3'>
												<Link to={githubURL}>
													<FaGithub size={40} />
												</Link>
											</li>
											<li>
												<Link to={linkedInURL}>
													<FaLinkedin size={40} />
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
export default Profile;
