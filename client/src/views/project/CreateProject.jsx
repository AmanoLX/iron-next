import React, { Component } from 'react';
import { createProject } from './../../services/project';
import CheckboxGroup from './../../components/CheckboxGroup';

class CreateProject extends Component {
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
		/*
    const body = new FormData();
    for (let key in data) {
      const value = data[key];
      if (value instanceof Array) {
        for (let item of value) {
          body.append(key, item);
        }
      } else {
        body.append(key, value);
      }
    }
    console.log(body);
    */
		const project = await createProject(data);
		// const resource = await createResource({
		//   topic,
		//   title,
		//   url,
		//   type,
		//   description
		// });
		this.props.history.push(`/project/${project._id}`);
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
				<div className='card form-card bg-light p-5 w-100'>
					<div className='row g-0'>
						<div className='card-body'>
							<div className='row d-flex align-items-center'>
								<form onSubmit={this.handleFormSubmission}>
									<div className='mb-3'>
										<div className='row w-100 d-flex align-items-center ml-0'>
											{/* Title */}
											<label
												htmlFor='input-title'
												className='col-md-4 col-form-label pl-0'>
												<h2>Project Title</h2>
											</label>

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
										<button className='btn btn-secondary'>
											Create Project
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default CreateProject;
