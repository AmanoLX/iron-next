import React, { Component } from 'react';
import { loadProfile, editSingleProfile } from './../../services/profile';

class EditProfile extends Component {
	state = {
		name: '',
		email: '',
		profilePicture: '',
		bio: '',
		city: '',
		country: '',
		graduateType: '',
		yearOfGraduation: '',
		githubURL: '',
		linkedInURL: '',
	};

	async componentDidMount() {
		const user = await loadProfile(this.props.match.params.id);
		this.setState({
			name: user.name,
			email: user.email,
			profilePicture: user.profilePicture,
			bio: user.bio,
			city: user.city,
			country: user.country,
			graduateType: user.graduateType,
			yearOfGraduation: user.yearOfGraduation,
			githubURL: user.githubURL,
			linkedInURL: user.linkedInURL,
		});
	}

	handleFormSubmission = async event => {
		event.preventDefault();
		const {
			name,
			email,
			profilePicture,
			bio,
			city,
			country,
			graduateType,
			yearOfGraduation,
			githubURL,
			linkedInURL,
		} = this.state;

		// const user = await signUp({
		// 	name,
		// 	email,
		// 	password,
		// 	profilePicture,
		// 	graduateType,
		// });
		// console.log(user);
		// this.props.onUserChange(user);

		const values = {
			name,
			email,
			profilePicture,
			bio,
			city,
			country,
			graduateType,
			yearOfGraduation,
			githubURL,
			linkedInURL,
		};
		const data = new FormData();
		for (let key in values) {
			data.append(key, values[key]);
		}
		await editSingleProfile(this.props.match.params.id, data);
		this.props.history.push(`/profile/${this.props.match.params.id}`);
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	};

	handleFileInputChange = event => {
		const { name, files } = event.target;
		const file = files[0];
		this.setState({
			[name]: file,
		});
	};

	render() {
		const {
			name,
			email,
			bio,
			city,
			country,
			graduateType,
			yearOfGraduation,
			githubURL,
			linkedInURL,
		} = this.state;
		return (
			<section className='d-flex justify-content-center align-items-center my-5'>
				<div className='card form-card bg-light py-3 px-5 w-100'>
					<div className='row g-0'>
						<div className='card-body'>
							<h1 className='card-title text-center mb-3'>Edit Profile</h1>
							<form onSubmit={this.handleFormSubmission}>
								<div className='row g-3'>
									{/* Name */}
									<div>
										<label htmlFor='name-input' className='form-label'>
											Name
										</label>
										<input
											className='form-control'
											type='text'
											id='name-input'
											aria-describedby='name'
											name='name'
											value={name}
											onChange={this.handleInputChange}
										/>
									</div>
									{/* Email */}
									<div>
										<label htmlFor='email-input' className='form-label'>
											Email address
										</label>
										<input
											className='form-control'
											type='email'
											id='email-input'
											aria-describedby='email'
											name='email'
											value={email}
											onChange={this.handleInputChange}
										/>
									</div>

									{/* Profile Picture */}
									<div>
										<label htmlFor='picture-input' className='form-label'>
											Choose a Profile Picture
										</label>
										<input
											className='form-control'
											type='file'
											id='picture-input'
											name='profilePicture'
											onChange={this.handleFileInputChange}
										/>
									</div>

									{/* Year of Graduation */}
									<div className='row g-2'>
										<div className='col'>
											<label
												htmlFor='graduateType-input'
												className='form-label'>
												Graduated in:
											</label>
											<select
												className='form-select'
												id='graduateType-input'
												name='graduateType'
												placeholder='graduateType'
												value={graduateType}
												onChange={this.handleInputChange}>
												<option value='' disabled>
													Choose an option
												</option>
												<option value='Web Development'>Web Development</option>
												<option value='UX/UI Design'>UX/UI Design</option>
											</select>
										</div>
										<div className='col'>
											<label
												htmlFor='yearGraduation-input'
												className='form-label'>
												Year of Graduation
											</label>
											<input
												className='form-control'
												type='text'
												id='yearGraduation-input'
												name='yearOfGraduation'
												placeholder='yearOfGraduation'
												value={yearOfGraduation}
												onChange={this.handleInputChange}
											/>
										</div>
									</div>

									{/* City & Country */}
									<div className='row g-2'>
										<div className='col'>
											<label htmlFor='city-input' className='form-label'>
												City
											</label>
											<input
												type='text'
												className='form-control'
												id='city-input'
												name='city'
												placeholder='city'
												value={city}
												onChange={this.handleInputChange}
											/>
										</div>
										<div className='col'>
											<label htmlFor='country-input' className='form-label'>
												Country
											</label>
											<input
												type='text'
												className='form-control'
												id='country-input'
												name='country'
												placeholder='country'
												value={country}
												onChange={this.handleInputChange}
											/>
										</div>
									</div>

									{/* Bio */}
									<div>
										<label htmlFor='bio-input' className='form-label'>
											Biography
										</label>
										<textarea
											className='form-control'
											type='text'
											id='bio-input'
											name='bio'
											rows='5'
											placeholder='bio'
											value={bio}
											onChange={this.handleInputChange}
										/>
									</div>

									{/* Github Link */}
									<div className='mb-3'>
										<label htmlFor='github-input' className='form-label'>
											Github Link
										</label>
										<input
											className='form-control'
											type='text'
											id='github-input'
											name='githubURL'
											placeholder='githubURL'
											value={githubURL}
											onChange={this.handleInputChange}
										/>
									</div>

									{/* LinkedIn Link */}
									<div className='mb-3'>
										<label htmlFor='linkedin-input' className='form-label'>
											LinkedIn Link
										</label>
										<input
											className='form-control'
											type='text'
											id='linkedin-input'
											name='linkedInURL'
											placeholder='linkedInURL'
											value={linkedInURL}
											onChange={this.handleInputChange}
										/>
									</div>

									{/* Sign Btn */}
									<div className='d-grid mb-5'>
										<button className='btn btn-primary' type='submit'>
											Save Profile
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
export default EditProfile;
