import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { loadProfile } from '../../services/profile';
// import MyProjects from './../../components/MyProjects';

class Profile extends Component {
	state = {
		user: null,
	};

	async componentDidMount() {
		const user = await loadProfile(this.props.match.params.id);
		this.setState({ user });
		console.log(user);
	}

	render() {
		const { user } = this.state;
		return (
			<>
				{user && (
					<section className='d-flex justify-content-center align-items-center'>
						<div className='card form-card bg-light py-3 px-5 w-100'>
							<div className='row g-0'>
								<div className='card-body'>
									<div className='row justify-content-between'>
										{/* COL LEFT */}
										<div className='col-md-4 pe-5 border-end border-secondary'>
											<div className='d-flex flex-column align-items-center mb-5 text-center'>
												{(user.profilePicture && (
													<img
														src={user.profilePicture}
														alt={user.name}
														className='profile-img mb-3'
													/>
												)) || (
													<img
														src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png'
														alt={user.name}
														className='profile-img mb-3'
													/>
												)}

												<h3>Hi {user.name}!</h3>
											</div>

											{/* Buttons */}
											<div className='d-grid gap-2'>
												{/* <Link to='/profile/'>
													<div
														className='btn btn-outline-secondary w-100'
														type='button'>
														Dashboard
													</div>
												</Link> */}
												{/* <Link to='/project/myprojects'>
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
												</Link> */}
												<Link to={`/profile/${user._id}/edit`}>
													<div
														className='btn btn-outline-secondary w-100'
														type='button'>
														Edit Profile
													</div>
												</Link>
												<Link to='/profile/edit'>
													<div
														className='btn btn-outline-secondary w-100'
														type='button'>
														Delete Profile
													</div>
												</Link>
											</div>
										</div>

										{/* COL RIGHT */}
										<div className='col-md-8 ps-5'>
											<div className='bio d-flex flex-column justify-content-between mb-5 border-bottom border-secondary pb-3'>
												<h2>Bio</h2>
												{(user.bio && (
													<p>
														Lorem ipsum dolor sit amet consectetur adipisicing
														elit. Fugiat est, omnis voluptas sapiente distinctio
														sequi aperiam necessitatibus sed quis voluptates
														corrupti, maiores placeat excepturi ipsa incidunt
														aliquid esse quisquam. Perspiciatis ad aliquam
														reprehenderit voluptatum quaerat vero praesentium
														nobis!
													</p>
												)) || (
													<div className='mb-3'>
														<p>No bio yet. Complete your profile right now.</p>
														<Link to={`/profile/${user._id}/edit`}>
															<div
																className='btn btn-outline-secondary'
																type='button'>
																Edit Profile
															</div>
														</Link>
													</div>
												)}
												{user.city && user.country && (
													<h5>
														Location: <span>{user.city},</span>{' '}
														<span>{user.country}</span>
													</h5>
												)}

												{user.graduateType && (
													<h6>Course followed: {user.graduateType}</h6>
												)}
												{user.yearOfGraduation && (
													<h6>Graduated in: {user.yearOfGraduation}</h6>
												)}

												{/* Social Media Icons */}
												<ul className='list-group list-group-horizontal'>
													{user.githubURL && (
														<li className='me-3'>
															<a
																href={user.githubURL}
																target='_blank'
																rel='noreferrer'>
																<FaGithub size={40} />
															</a>
														</li>
													)}
													{user.linkedInURL && (
														<li>
															<a
																href={user.linkedInURL}
																target='_blank'
																rel='noreferrer'>
																<FaLinkedin size={40} />
															</a>
														</li>
													)}
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				)}
			</>
		);
	}
}
export default Profile;
