import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
	loadProject,
	participateInProject,
	deleteProject,
} from './../../services/project';
import ProjectTypeBtn from './../../components/ProjectTypeBtn';

class SingleProject extends Component {
	state = {
		project: null,
		participation: null,
	};

	async componentDidMount() {
		const { project, participation } = await loadProject(
			this.props.match.params.id
		);
		this.setState({ project, participation });
	}

	handleParticipation = async () => {
		const participation = await participateInProject(
			this.props.match.params.id
		);
		this.setState({ participation });
	};

	handleDelete = async id => {
		await deleteProject(id);
	};

	render() {
		const project = this.state.project;
		return (
			<section className='d-flex justify-content-center align-items-center'>
				<div className='card form-card bg-light w-100'>
					{project && (
						<div className='row g-0'>
							<div className='col-md-8 py-3 px-5'>
								<div className='card-body'>
									{/* Title */}
									<h1 className='mb-4'>{project.title}</h1>

									{/* Description */}
									{project.description && (
										<div className='mb-3'>
											<h4>Description</h4>
											<p>{project.description}</p>
										</div>
									)}

									{/* Topic and Types */}
									<div className='mb-3'>
										<button
											type='button'
											className='btn btn-primary btn-lg me-3'>
											{project.roleNeeded}
										</button>
										{project.skillsNeeded &&
											project.skillsNeeded.map(type => (
												//<span>{type}</span>
												<ProjectTypeBtn type={type} />
											))}
									</div>
								</div>
							</div>
							{/* Creator */}
							<div className='col-md-4 border-start border-2 p-5 d-flex flex-column align-items-center'>
								{/* Name */}
								<div className='mb-3 text-center'>
									<h3>
										Created by {project.creator.name}
										{/* // on {project.timestamps.createdAt} */}
									</h3>
								</div>
								{/* Profile Picture */}
								<div className='mb-3'>
									{(project.creator.profilePicture && (
										<img
											src={project.creator.profilePicture}
											alt={project.creator.name}
											className='profile-img mb-3'
										/>
									)) || (
										<img
											src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png'
											alt={project.creator.name}
											className='profile-img mb-3'
										/>
									)}
								</div>
								{/* Contact Btn's */}
								{this.props.user._id !== project.creator._id && (
									<div className='d-grid gap-2 w-100'>
										<Link to={`/profile/${project.creator._id}`}>
											<div type='button' className='btn btn-primary w-100'>
												Profile
											</div>
										</Link>
									</div>
								)}

								{/* Edit & Delete Btn's */}
								{(this.props.user &&
									this.props.user._id === project.creator._id && (
										<>
											<Link
												to={`/project/${project._id}/edit`}
												className='btn btn-primary w-100'>
												Edit
											</Link>
											<button
												className='btn btn-primary w-100'
												onClick={() => this.handleDelete(project._id)}>
												Delete
											</button>
										</>
									)) ||
									(this.props.user && (
										/* Participation button */
										<button
											className='btn btn-primary w-100 mt-2'
											//   disabled={this.state.participation}
											onClick={this.handleParticipation}>
											{(this.state.participation &&
												'You are participating in this project!') ||
												'Participate in this project'}
										</button>
									))}
							</div>
						</div>
					)}
				</div>
			</section>
		);
	}
}

export default SingleProject;

/* <section className='d-flex justify-content-center align-items-center'>
				<div className='card form-card bg-light w-100'>
					{project && (
						<div>
							<h1>{project.title}</h1>
							<h2>{project.projectStatus}</h2>
							<span>{project.description}</span>
							<br />
							<span>
								{project.roleNeeded} {project.skillsNeeded}
							</span>
							<br />

							<small>Shared by {project.creator && project.creator.name}</small>
							{this.props.user &&
								this.props.user._id === project.creator._id &&
								((
									<>
										<button>Edit</button> <button>Delete</button>
									</>
								) || (
									<button
										className='button'
										//   disabled={this.state.participation}
										onClick={this.handleParticipation}>
										{(this.state.participation &&
											'You are participating on this project!') ||
											'Participate in this project'}
									</button>
								))}
						</div>
					)}
				</div>
			</section> */
