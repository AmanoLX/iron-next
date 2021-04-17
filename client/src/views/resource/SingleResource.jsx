import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { getSingleResource } from './../../services/resource';
import './SingleResource.css';

class SingleResource extends Component {
	state = {
		resource: null,
	};

	async componentDidMount() {
		const { resource } = await getSingleResource(this.props.match.params.id);
		this.setState({ resource });
	}

	render() {
		const resource = this.state.resource;
		return (
			<section className='d-flex justify-content-center align-items-center'>
				<div className='card form-card bg-light  w-100'>
					{resource && (
						<div className='row g-0'>
							<div className='col-md-8 py-3 px-5'>
								<div className='card-body'>
									<div>
										{/* Title */}
										<h1 className='mb-4'>{resource.title}</h1>

										{/* Description */}
										{resource.description && (
											<div className='mb-3'>
												<h4>Description</h4>
												<p>
													{resource.type} {resource.description}
												</p>
											</div>
										)}
										<div className='mb-3'>
											<h4>Resource link</h4>
											<a
												href={resource.url}
												target='_blank'
												rel='noopener noreferrer'>
												{resource.url}
											</a>
										</div>

										{/* Topic and Types */}
										<div className='mb-3'>
											<button
												type='button'
												className='btn btn-secondary btn-lg'>
												{resource.topic}
											</button>
										</div>

										{/* Video */}
										{resource.video && (
											<div className='mb-3'>
												<ReactPlayer
													url={resource.video}
													// other props
												/>
											</div>
										)}
									</div>
								</div>
							</div>

							{/* Creator */}
							<div className='col-md-4 border-start border-2 p-5 d-flex flex-column align-items-center'>
								{/* Name */}
								<div className='mb-3 text-center'>
									<h3>
										Shared by
										{resource.creator}
										{/* // on {resource.timestamps.createdAt} */}
									</h3>
								</div>

								{/* Profile Picture */}
								<div className='mb-3'>
									<img
										src={resource.creator.profilePicture}
										// src='https://res.cloudinary.com/dwxp3qpyp/image/upload/v1618343657/tcpvkm45o17vmpdrvqe0.jpg'
										alt={resource.name}
										className='resource-profile-picture'></img>
								</div>

								{/* Contact Btn's */}
								<div className='mb-3 text-center'>
									<button type='button' className='btn btn-secondary me-2'>
										Profile
									</button>
									<button type='button' className='btn btn-outline-secondary'>
										Message
									</button>
								</div>
							</div>
						</div>
					)}
				</div>
			</section>
		);
	}
}

export default SingleResource;
