import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import {
	getSingleResource,
	deleteSingleResource,
} from './../../services/resource';
import ResourceTypeBtn from './../../components/ResourceTypeBtn';
import './SingleResource.css';

class SingleResource extends Component {
	state = {
		resource: null,
		time: null,
	};

	async componentDidMount() {
		const { resource } = await getSingleResource(this.props.match.params.id);
		this.setState({ resource });
	}

	handleDelete = async id => {
		await deleteSingleResource(id);
		this.props.history.push(`/resource/list`);
	};

	render() {
		const resource = this.state.resource;
		return (
			<section className='d-flex justify-content-center align-items-center py-5'>
				<div className='card form-card bg-light w-100'>
					{resource && (
						<div className='row g-0'>
							<div className='col-md-8 py-3 px-5'>
								<div className='card-body'>
									{/* Title */}
									<h1 className='mb-4'>{resource.title}</h1>

									{/* Description */}
									{resource.description && (
										<div className='mb-3'>
											<h4>Description</h4>
											<p>{resource.description}</p>
										</div>
									)}

									{/* Video */}
									{resource.video && (
										<div className='mb-3'>
											<div className='react-player'>
												<ReactPlayer
													url={resource.video}
													width='100%'
													// height='100%'
													// other props
												/>
											</div>
										</div>
									)}

									{/* Link */}
									<div className='mb-5'>
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
											className='btn btn-primary btn-lg me-3'>
											{resource.topic}
										</button>
										{resource.type &&
											resource.type.map(type => (
												<ResourceTypeBtn type={type} />
											))}
									</div>
								</div>
							</div>

							{/* Creator */}
							<div className='col-md-4 border-start border-2 p-5 d-flex flex-column align-items-center'>
								{/* Name */}
								<div className='mb-3 text-center'>
									<h3>
										Shared by {resource.creator.name}
										{/* // on {resource.timestamps.createdAt} */}
									</h3>
								</div>

								{/* Profile Picture */}
								<div className='mb-3'>
									{(resource.creator.profilePicture && (
										<img
											src={resource.creator.profilePicture}
											alt={resource.creator.name}
											className='profile-img mb-3'
										/>
									)) || (
										<img
											src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png'
											alt={resource.creator.name}
											className='profile-img mb-3'
										/>
									)}
								</div>

								{/* Contact Btn's */}
								{(!this.props.user ||
									this.props.user._id !== resource.creator._id) && (
									<div className='d-grid gap-2 w-100'>
										<Link to={`/profile/${resource.creator._id}`}>
											<button type='button' className='btn btn-primary w-100'>
												Profile
											</button>
										</Link>
									</div>
								)}

								{/* Edit & Delete Btn's */}
								{this.props.user &&
									this.props.user._id === resource.creator._id && (
										<div className='d-grid gap-2 w-100'>
											<Link to={`/resource/${resource._id}/edit`}>
												<button type='button' className='btn btn-primary w-100'>
													Edit Resource
												</button>
											</Link>
											<Link to={`/resource/list`}>
												<button
													className='btn btn-primary w-100'
													onClick={() => this.handleDelete(resource._id)}>
													Delete Resource
												</button>
											</Link>
										</div>
									)}
							</div>
						</div>
					)}
				</div>
			</section>
		);
	}
}

export default SingleResource;
