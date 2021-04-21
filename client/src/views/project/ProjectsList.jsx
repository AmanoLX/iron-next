import { Component } from 'react';
import { listProjects } from '../../services/project';
import { Link } from 'react-router-dom';
import ProjectItem from './../../components/ProjectItem';

class ProjectsList extends Component {
	state = {
		projects: [],
		search: '',
	};

	async componentDidMount() {
		const projects = await listProjects();
		this.setState({ projects });
	}

	updateSearch = event => {
		const value = event.target.value;
		this.setState({
			search: value,
		});
	};

	render() {
		let filteredProjects = this.state.projects.filter(project => {
			return project.title.toLowerCase().indexOf(this.state.search) !== -1;
		});

		return (
			<section className='d-flex justify-content-center align-items-center'>
				<div className='card form-card bg-light py-3 px-5 w-100'>
					<div className='row g-0'>
						<div className='card-body'>
							<h2 className='mb-5'>Latest Projects</h2>
							<div className='row justify-content-between'>
								{/* COL LEFT */}
								<div className='col-md-4'>
									{/* Search */}
									<div className='mb-4'>
										<form className='d-flex'>
											<input
												className='form-control'
												type='text'
												placeholder='Search'
												value={this.state.search}
												onChange={this.updateSearch}
											/>
										</form>
									</div>

									{/* Topic
									<div className='mb-3'>
										<select
											className='form-select'
											aria-label='Default select example'
											id='input-topic'
											name='topic'
											value={this.state.resources.topic}
											onChange={this.updateSearch}
											required>
											<option value='' disabled>
												Choose an option
											</option>
											<option value='Web Development'>Web Development</option>
											<option value='UX/UI Design'>UX/UI Design</option>
										</select>
									</div> */}
								</div>
								{/* COL RIGHT */}
								<div className='col-md-8'>
									{filteredProjects.map(project => (
										<Link key={project._id} to={`/project/${project._id}`}>
											<ProjectItem project={project} />
										</Link>
									))}
									{/* <ResourceList resources={this.state.resources} /> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default ProjectsList;
