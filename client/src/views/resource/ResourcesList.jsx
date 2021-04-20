import React, { Component } from 'react';
import { listResources } from '../../services/resource';
import ResourceList from '../../components/ResourceList';

class ResourcesList extends Component {
	state = {
		resources: [],
		search: '',
	};

	async componentDidMount() {
		const resources = await listResources();
		this.setState({ resources });
		console.log("the resources I'm fetching from the API: ", resources);
	}

	render() {
		return (
			<section className='d-flex justify-content-center align-items-center'>
				<div className='card form-card bg-light py-3 px-5 w-100'>
					<div className='row g-0'>
						<div className='card-body'>
							<h2 className='mb-5'>Latest resources</h2>
							<div className='row justify-content-between'>
								{/* COL LEFT */}
								<div className='col-md-4'>
									{/* Search */}
									<div className='mb-4'>
										<form className='d-flex'>
											<input
												className='form-control me-2'
												type='search'
												placeholder='Search'
											/>
											<button className='btn btn-outline-second' type='submit'>
												Search
											</button>
										</form>
									</div>

									{/* Topic */}
									<div className='mb-3'>
										<select
											className='form-select'
											aria-label='Default select example'
											id='input-topic'
											name='topic'
											value={this.state.resources.topic}
											onChange={this.handleInputChange}
											required>
											<option value='' disabled>
												Choose an option
											</option>
											<option value='Web Development'>Web Development</option>
											<option value='UX/UI Design'>UX/UI Design</option>
										</select>
									</div>
								</div>
								{/* COL RIGHT */}
								<div className='col-md-8'>
									<ResourceList resources={this.state.resources} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default ResourcesList;
