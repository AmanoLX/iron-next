import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { listResources } from '../../services/resource';
import ResourceItem from '../../components/ResourceItem';

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

	updateSearch = event => {
		const value = event.target.value;
		this.setState({
			search: value,
		});
	};

	render() {
		let filteredResources = this.state.resources.filter(resource => {
			return resource.title.toLowerCase().indexOf(this.state.search) !== -1;
		});
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
												type='text'
												placeholder='Search'
												value={this.state.search}
												onChange={this.updateSearch}
											/>
										</form>
									</div>
								</div>
								{/* COL RIGHT */}
								<div className='col-md-8'>
									{filteredResources.map(resource => (
										<Link key={resource._id} to={`/resource/${resource._id}`}>
											<ResourceItem resource={resource} />
										</Link>
									))}
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
