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
		this.props.history.push(`/project/list`);
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

									{/* Project Status */}
									{project.projectStatus && (
										<div className='mb-3'>
											<h4>Project Status</h4>
											<p>{project.projectStatus}</p>
										</div>
									)}

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
								{(!this.props.user ||
									this.props.user._id !== project.creator._id) && (
									<div className='d-grid gap-2 w-100'>
										<Link to={`/profile/${project.creator._id}`}>
											<div type='button' className='btn btn-primary w-100 mb-2'>
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
												className='btn btn-primary w-100 mb-2'>
												Edit Project
											</Link>
											<button
												className='btn btn-primary w-100 '
												onClick={() => this.handleDelete(project._id)}>
												Delete Project
											</button>
										</>
									)) ||
									(this.props.user &&
										/* Participation button */
										((this.state.participation && (
											<button
												className='btn btn-secondary w-100 '
												onClick={this.handleParticipation}>
												You are participating in this project!
											</button>
										)) || (
											<button
												className='btn btn-primary w-100'
												onClick={this.handleParticipation}>
												Participate in this project
											</button>
										)))}
							</div>
						</div>
					)}
				</div>
			</section>
		);
	}
}

export default SingleProject;
