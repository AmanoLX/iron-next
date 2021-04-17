import React, { Component } from 'react';
import { createResource } from './../../services/resource';
import CheckboxGroup from './../../components/CheckboxGroup';

class CreateResource extends Component {
	state = {
		topic: '',
		title: '',
		url: '',
		possibleTypes: [
			{
				value: 'book',
				label: 'Book',
			},
			{
				value: 'video',
				label: 'Video',
			},
			{
				value: 'article',
				label: 'Article',
			},
			{
				value: 'blog',
				label: 'Blog',
			},
			{
				value: 'podcast',
				label: 'Podcast',
			},
			{
				value: 'course',
				label: 'Course',
			},
		],
		type: [],
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

	handleCheckboxGroupChange = (name, values) => {
		this.setState({
			[name]: values,
		});
	};

	render() {
		const { topic, title, url, possibleTypes, type, description } = this.state;
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
												<h2>Resource Title</h2>
											</label>

											<input
												className='form-control col-md-8'
												type='text'
												id='input-title'
												aria-describedby='title'
												name='title'
												placeholder='For example: Flexbox Design Patters'
												required
												value={title}
												onChange={this.handleInputChange}
											/>
										</div>
									</div>

									{/* Link */}
									<div className='mb-3'>
										<label htmlFor='input-url' className='form-label'>
											Resource link
										</label>
										<input
											className='form-control'
											type='text'
											id='input-url'
											aria-describedby='url'
											name='url'
											placeholder='For example: https://www.youtube.com/watch?v=vQAvjof1oe4'
											required
											value={url}
											onChange={this.handleInputChange}
										/>
									</div>

									{/* Topic */}
									<div className='mb-3'>
										<label htmlFor='input-topic' className='form-label'>
											Topic to share
										</label>
										<select
											className='form-select'
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

									{/* Type */}
									<div className='mb-2 d-flex flex-column'>
										<label htmlFor='input-type' className='form-label'>
											Type of resource
										</label>
										<div className='d-flex'>
											<CheckboxGroup
												options={possibleTypes}
												values={type}
												onUpdate={values =>
													this.handleCheckboxGroupChange('type', values)
												}
											/>
										</div>
									</div>
									{/* <div className='mb-3'>
										<label htmlFor='input-topic'>Type of resource</label>
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
									</div> */}

									{/* Description */}
									<div className='mb-4'>
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
										<button className='btn btn-secondary'>
											Create Resource
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

export default CreateResource;
