import React, { Component } from 'react';
import { loadProject, participateInProject } from './../../services/project';

class SingleProject extends Component {
	state = {
		project: null,
		participation: null,
	};

	async componentDidMount() {
		const { project } = await loadProject(this.props.match.params.id);
		this.setState({ project });
	}

	handleParticipation = async () => {
		const participation = await participateInProject(
			this.props.match.params.id
		);
		this.setState({ participation });
	};

	render() {
		const project = this.state.project;
		// console.log('user:', this.props.user);
		// if (this.state.project) {
		// 	console.log('project creator:', this.state.project);
		// }

		return (
			<section className='d-flex justify-content-center align-items-center'>
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
			</section>
		);
	}
}

export default SingleProject;
