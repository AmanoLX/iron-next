import React, { Component } from 'react';
import { loadProject, editProject } from './../../services/project';
import CheckboxGroup from './../../components/CheckboxGroup';

class EditSingleProject extends Component {
	state = {
		title: '',
		description: '',
		roleNeeded: '',
		possibleSkillsNeeded: [
			{
				value: 'User Research',
				label: 'User Research',
			},
			{
				value: 'Wireframes/Prototyping',
				label: 'Wireframes/Prototyping',
			},
			{
				value: 'UI/UX Design',
				label: 'UI/UX Design',
			},
			{
				value: 'HTML/CSS',
				label: 'HTML/CSS',
			},
			{
				value: 'Javascript',
				label: 'Javascript',
			},
			{
				value: 'Node JS',
				label: 'Node JS',
			},
			{
				value: 'React JS',
				label: 'React JS',
			},
		],
		skillsNeeded: [],
		projectStatus: '',
	};

	async componentDidMount() {
		const { project } = await loadProject(this.props.match.params.id);
		this.setState({
			title: project.title,
			description: project.description,
			roleNeeded: project.roleNeeded,
			skillsNeeded: project.skillsNeeded,
			projectStatus: project.projectStatus,
		});
	}

	handleFormSubmission = async event => {
		event.preventDefault();
		const {
			title,
			description,
			roleNeeded,
			skillsNeeded,
			projectStatus,
		} = this.state;
		const data = {
			title,
			description,
			roleNeeded,
			skillsNeeded,
			projectStatus,
		};
		await editProject(this.props.match.params.id, data);
		this.props.history.push(`/project/${this.props.match.params.id}`);
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	};

	handleCheckboxGroupChange = (name, values) => {
		this.setState({
			[name]: values,
		});
	};

	render() {
		const {
			title,
			description,
			roleNeeded,
			possibleSkillsNeeded,
			skillsNeeded,
			projectStatus,
		} = this.state;
		return (
			<section className='d-flex justify-content-center align-items-center'>
				<div className='card form-card bg-light py-3 px-5 w-100'>
					<div className='row g-0'>
						<div className='card-body'>
							<form onSubmit={this.handleFormSubmission}>
								<div className='row align-items-center'>
									{/* Title */}
									<label
										htmlFor='input-title'
										className='col-md-4 col-form-label pl-0'>
										<h2>Project Title</h2>
									</label>
									<div className='col-md-8'>
										<input
											className='form-control col-md-8'
											type='text'
											id='input-title'
											aria-describedby='title'
											name='title'
											placeholder='For example: Ironbeer 2.0 App'
											required
											value={title}
											onChange={this.handleInputChange}
										/>
									</div>
								</div>

								{/* Status */}
								<div className='mb-3'>
									<label htmlFor='input-status' className='form-label'>
										Status of project
									</label>
									<select
										className='form-select'
										aria-label='Default select example'
										id='input-status'
										name='projectStatus'
										value={projectStatus}
										onChange={this.handleInputChange}
										required>
										<option value='' disabled>
											Selected an option
										</option>
										<option value='Not started yet'>Not started yet</option>
										<option value='In progress'>In Progress</option>
										<option value='Finishing'>End Stage</option>
									</select>
								</div>

								{/* Description */}
								<div className='mb-3'>
									<label htmlFor='input-description' className='form-label'>
										Project description
									</label>
									<textarea
										className='form-control'
										rows='5'
										id='input-description'
										name='description'
										placeholder='Brief descripton of the project'
										value={description}
										onChange={this.handleInputChange}
									/>
								</div>

								{/* Roles */}
								<div className='mb-3'>
									<label htmlFor='input-roles' className='form-label'>
										Roles Needed
									</label>
									<select
										className='form-select'
										aria-label='Default select example'
										id='input-roles'
										name='roleNeeded'
										value={roleNeeded}
										onChange={this.handleInputChange}
										required>
										<option value='' disabled>
											Roles Needed
										</option>
										<option value='UX/UI Graduate'>UX/UI Graduate</option>
										<option value='WebDev Graduate'>WebDev Graduate</option>
									</select>
								</div>

								{/* Skills */}
								<div className='mb-3 d-flex flex-column'>
									<label htmlFor='input-roles' className='form-label'>
										Skills Needed
									</label>
									<div className='d-flex'>
										<CheckboxGroup
											options={possibleSkillsNeeded}
											values={skillsNeeded}
											onUpdate={values =>
												this.handleCheckboxGroupChange('skillsNeeded', values)
											}
										/>
									</div>
								</div>

								{/* Create Btn */}
								<div className='d-grid'>
									<button className='btn btn-primary'>Save Changes</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default EditSingleProject;
