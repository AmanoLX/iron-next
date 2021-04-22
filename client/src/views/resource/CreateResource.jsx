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
		video: '',
		description: '',
		creator: '',
	};

	handleFormSubmission = async event => {
		event.preventDefault();
		const { topic, title, url, type, video, description } = this.state;
		const data = {
			topic,
			title,
			url,
			type,
			video,
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
		const {
			topic,
			title,
			url,
			possibleTypes,
			type,
			video,
			description,
		} = this.state;
		return (
			<section className='d-flex justify-content-center align-items-center'>
				<div className='card form-card bg-light py-3 px-5 w-100'>
					<div className='row g-0'>
						<div className='card-body'>
							<form onSubmit={this.handleFormSubmission}>
								{/* Title */}
								<div className='row align-items-center'>
									<label
										htmlFor='input-title'
										className='col-md-4 col-form-label'>
										<h2>Resource Title</h2>
									</label>
									<div className='col-md-8'>
										<input
											className='form-control'
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

								{/* Resource Link */}
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
										placeholder='For example: https://developer.mozilla.org/en-US/...'
										required
										value={url}
										onChange={this.handleInputChange}
									/>
								</div>

								{/* Topic */}
								<div className='mb-3'>
									<label htmlFor='input-topic' className='form-label'>
										Web or Design?
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
											Choose an option
										</option>
										<option value='Web Development'>Web Development</option>
										<option value='UX/UI Design'>UX/UI Design</option>
									</select>
								</div>

								{/* Type */}
								<div className='mb-2 d-flex flex-column'>
									<label htmlFor='input-type' className='form-label'>
										Resource form
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

								{/* Video */}
								{type.includes('video') && (
									<div className='mb-3'>
										<label htmlFor='input-video' className='form-label'>
											Video link
										</label>
										<input
											className='form-control'
											type='text'
											id='input-video'
											aria-describedby='video'
											name='video'
											placeholder='For example: https://www.youtube.com/...'
											value={video}
											onChange={this.handleInputChange}
										/>
									</div>
								)}
								{/* )} */}

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
									<button className='btn btn-secondary'>Create Resource</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default CreateResource;

// import React, { Component } from 'react';
// import { createResource } from './../../services/resource';
// import CheckboxGroup from './../../components/CheckboxGroup';

// class CreateResource extends Component {
// 	state = {
// 		topic: '',
// 		title: '',
// 		url: '',
// 		possibleTypes: [
// 			{
// 				value: 'book',
// 				label: 'Book',
// 			},
// 			{
// 				value: 'video',
// 				label: 'Video',
// 			},
// 			{
// 				value: 'article',
// 				label: 'Article',
// 			},
// 			{
// 				value: 'blog',
// 				label: 'Blog',
// 			},
// 			{
// 				value: 'podcast',
// 				label: 'Podcast',
// 			},
// 			{
// 				value: 'course',
// 				label: 'Course',
// 			},
// 		],
// 		type: [],
// 		video: '',
// 		description: '',
// 		creator: '',
// 	};

// 	handleFormSubmission = async event => {
// 		event.preventDefault();
// 		const { topic, title, url, type, video, description } = this.state;
// 		const data = {
// 			topic,
// 			title,
// 			url,
// 			type,
// 			video,
// 			description,
// 		};
// 		/*
//     const body = new FormData();
//     for (let key in data) {
//       const value = data[key];
//       if (value instanceof Array) {
//         for (let item of value) {
//           body.append(key, item);
//         }
//       } else {
//         body.append(key, value);
//       }
//     }
//     console.log(body);
//     */
// 		const resource = await createResource(data);
// 		// const resource = await createResource({
// 		//   topic,
// 		//   title,
// 		//   url,
// 		//   type,
// 		//   description
// 		// });
// 		this.props.history.push(`/resource/${resource._id}`);
// 	};

// 	handleInputChange = event => {
// 		const { name, value } = event.target;
// 		this.setState({
// 			[name]: value,
// 		});
// 	};

// 	handleCheckboxGroupChange = (name, values) => {
// 		this.setState({
// 			[name]: values,
// 		});
// 	};

// 	render() {
// 		const {
// 			topic,
// 			title,
// 			url,
// 			possibleTypes,
// 			type,
// 			video,
// 			description,
// 		} = this.state;
// 		return (
// 			<section className='d-flex justify-content-center align-items-center'>
// 				<div className='card form-card bg-light py-3 px-5 w-100'>
// 					<div className='row g-0'>
// 						<div className='card-body'>
// 							<form onSubmit={this.handleFormSubmission}>
// 								{/* Title */}
// 								<div className='row align-items-center'>
// 									<label
// 										htmlFor='input-title'
// 										className='col-md-4 col-form-label'>
// 										<h2>Resource Title</h2>
// 									</label>
// 									<div className='col-md-8'>
// 										<input
// 											className='form-control'
// 											type='text'
// 											id='input-title'
// 											aria-describedby='title'
// 											name='title'
// 											placeholder='For example: Flexbox Design Patters'
// 											required
// 											value={title}
// 											onChange={this.handleInputChange}
// 										/>
// 									</div>
// 								</div>

// 								{/* Resource Link */}
// 								<div className='mb-3'>
// 									<label htmlFor='input-url' className='form-label'>
// 										Resource link
// 									</label>
// 									<input
// 										className='form-control'
// 										type='text'
// 										id='input-url'
// 										aria-describedby='url'
// 										name='url'
// 										placeholder='For example: https://developer.mozilla.org/en-US/...'
// 										required
// 										value={url}
// 										onChange={this.handleInputChange}
// 									/>
// 								</div>

// 								{/* Topic */}
// 								<div className='mb-3'>
// 									<label htmlFor='input-topic' className='form-label'>
// 										Web or Design?
// 									</label>
// 									<select
// 										className='form-select'
// 										aria-label='Default select example'
// 										id='input-topic'
// 										name='topic'
// 										value={topic}
// 										onChange={this.handleInputChange}
// 										required>
// 										<option value='' disabled>
// 											Choose an option
// 										</option>
// 										<option value='Web Development'>Web Development</option>
// 										<option value='UX/UI Design'>UX/UI Design</option>
// 									</select>
// 								</div>

// 								{/* Type */}
// 								<div className='mb-2 d-flex flex-column'>
// 									<label htmlFor='input-type' className='form-label'>
// 										Resource form
// 									</label>
// 									<div className='d-flex'>
// 										<CheckboxGroup
// 											options={possibleTypes}
// 											values={type}
// 											onUpdate={values =>
// 												this.handleCheckboxGroupChange('type', values)
// 											}
// 										/>
// 									</div>
// 								</div>

// 								{/* Video */}
// 								{type.includes('video') && (
// 									<div className='mb-3'>
// 										<label htmlFor='input-video' className='form-label'>
// 											Video link
// 										</label>
// 										<input
// 											className='form-control'
// 											type='text'
// 											id='input-video'
// 											aria-describedby='video'
// 											name='video'
// 											placeholder='For example: https://www.youtube.com/...'
// 											value={video}
// 											onChange={this.handleInputChange}
// 										/>
// 									</div>
// 								)}

// 								{/* Description */}
// 								<div className='mb-4'>
// 									<label htmlFor='input-description' className='form-label'>
// 										Description
// 									</label>
// 									<textarea
// 										className='form-control'
// 										rows='5'
// 										id='input-description'
// 										name='description'
// 										placeholder='Short descripton of resource '
// 										value={description}
// 										onChange={this.handleInputChange}
// 									/>
// 								</div>

// 								{/* Create Btn */}
// 								<div className='d-grid'>
// 									<button className='btn btn-secondary'>Create Resource</button>
// 								</div>
// 							</form>
// 						</div>
// 					</div>
// 				</div>
// 			</section>
// 		);
// 	}
// }

// export default CreateResource;
