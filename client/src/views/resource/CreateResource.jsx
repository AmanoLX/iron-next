import React, { Component } from 'react';
import { createResource } from './../../services/resource';

class CreateResource extends Component {
	state = {
		topic: '',
		title: '',
		url: '',
		type: '',
		description: '',
		creator: '',
	};

	handleFormSubmission = async event => {
		event.preventDefault();
		const { topic, title, url, type, description } = this.state;
		const data = {
			topic,
			title,
			url,
			type,
			description,
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
		const resource = await createResource(data);
		// const resource = await createResource({
		//   topic,
		//   title,
		//   url,
		//   type,
		//   description
		// });
		this.props.history.push(`/resource/${resource._id}`);
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	};

	render() {
		const { topic, title, url, type, description } = this.state;
		return (
			<section className='d-flex justify-content-center align-items-center'>
				<div className='card form-card bg-light p-5 w-100'>
					<div className='row g-0'>
						<div className='card-body'>
							{/* <h1 className='card-title mb-4 text-center'>Share a resource</h1> */}
							<div className='mb-3 row d-flex align-items-center'>
								<form onSubmit={this.handleFormSubmission}>
									<div className='row d-flex align-items-center mb-3'>
										{/* Title */}
										<label
											htmlFor='input-title'
											className='col-md-4 col-form-label'>
											<h2>Resource Title</h2>
										</label>
										<div className='col-md-8'>
											<input
												className='form-control'
												type='title'
												id='input-title'
												aria-describedby='title'
												name='title'
												required
												value={title}
												onChange={this.handleInputChange}
											/>
										</div>
									</div>

									{/* Link */}
									<div>
										<label htmlFor='input-url' className='form-label'>
											Resource link
										</label>
										<input
											className='form-control'
											type='text'
											id='input-url'
											aria-describedby='url'
											name='url'
											required
											value={url}
											onChange={this.handleInputChange}
										/>
									</div>
								</form>
							</div>

							{/* Topic */}
							<div className='mb-3'>
								<label htmlFor='input-topic'>Topic to share</label>
								<select
									class='form-select'
									aria-label='Default select example'
									id='input-topic'
									name='topic'
									value={topic}
									onChange={this.handleInputChange}
									required>
									<option value='' disabled>
										Main topic
									</option>
									<option value='UX/UI Design'>UX/UI Design</option>
									<option value='Web Development'>Web Development</option>
								</select>
							</div>

							{/* Resource */}
							<div className='mb-3'>
								<div>
									<div className='form-check form-check-inline'>
										<input
											className='form-check-input'
											type='checkbox'
											id='inlineCheckbox1'
											value='option1'
										/>
										<label className='form-check-label' for='inlineCheckbox1'>
											Blog
										</label>
									</div>
									<div class='form-check form-check-inline'>
										<input
											className='form-check-input'
											type='checkbox'
											id='inlineCheckbox2'
											value='option2'
										/>
										<label className='form-check-label' for='inlineCheckbox2'>
											Website
										</label>
									</div>
									<div className='form-check form-check-inline'>
										<input
											className='form-check-input'
											type='checkbox'
											id='inlineCheckbox3'
											value='option3'
										/>
										<label className='form-check-label' for='inlineCheckbox3'>
											Youtube
										</label>
									</div>
								</div>
								<label htmlFor='input-type'>Resource Type</label>
								<select
									className='form-select'
									aria-label='Default select example'
									id='input-type'
									name='type'
									value={type}
									onChange={this.handleInputChange}
									required>
									<option value='' disabled>
										Topic
									</option>
									<option value='book'>Book</option>
									<option value='video'>Video</option>
									<option value='article'>Article</option>
									<option value='blog'>Blog</option>
									<option value='podcast'>Podcast</option>
									<option value='course'>Course</option>
								</select>
							</div>

							{/* Description */}
							<div className='mb-3'>
								<label htmlFor='input-description' className='form-label'>
									Description
								</label>
								<textarea
									className='form-control'
									rows='5'
									id='input-description'
									name='description'
									placeholder='Short descripton of resource '
									value={description}
									onChange={this.handleInputChange}
								/>
							</div>

							{/* Create Btn */}
							<div className='d-grid'>
								<button className='btn btn-secondary' type='submit'>
									Create Resource
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default CreateResource;
