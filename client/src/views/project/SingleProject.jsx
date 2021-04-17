import React, { Component } from 'react';
import { loadProject } from './../../services/project';
//import './SingleProject.scss';

class SingleProject extends Component {
	state = {
		project: null,
        //application : null 
	};

	async componentDidMount() {
		const { project } = await loadProject(this.props.match.params.id);
		this.setState({ project });
	}

//   handleParticipationApplication = async () => {
//     const application = await participateInProject(this.props.match.params.id);
//     this.setState({ application });
//   };

	render() {
		const project = this.state.project;
		return (
			<div>
				{project && (
					<div>
						<h1>{project.title}</h1>
						<h2>{project.projectStatus}</h2>
						<span>
							{project.description}
						</span>
						<br />
						<span>
							{project.roleNeeded} {project.skillsNeeded}
						</span>
                        <br />
                        {/* <button
//               className="button"
//               disabled={this.state.application}
//               onClick={this.handleParticipationApplication}
//             >
//               {(this.state.application && 'You are now working on this project!') || 'Participate in this project'}
//             </button> */}
                </div>
				)}
			</div>
		);
	}
}

export default SingleProject;




