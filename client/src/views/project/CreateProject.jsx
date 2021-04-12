import React, { Component } from 'react';
import { createProject } from './../../services/project';
// import CheckboxGroup from './../components/CheckboxGroup';

class CreateProject extends Component {
  state = {
    title: '',
    description: '',
    roleNeeded: [],
    skillsNeeded: [],
    projectCreator: '',
    projectStatus: []
  };

  handleFormSubmission = async event => {
    event.preventDefault();
    const {
        title,
        description,
        roleNeeded,
        skillsNeeded,
        projectCreator,
        projectStatus
    } = this.state;
    const data = {
        title,
        description,
        roleNeeded,
        skillsNeeded,
        projectCreator,
        projectStatus
    };
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
    const project = await createProject(body);
    this.props.history.push(`/project/${project._id}`);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

//   handleCheckboxInputChange = event => {
//     const { name, checked } = event.target;
//     this.setState({
//       [name]: checked
//     });
//   };

//   handleFileInputChange = event => {
//     const { name, files } = event.target;
//     const arrayOfFiles = [];
//     for (const file of files) arrayOfFiles.push(file);
//     this.setState({
//       [name]: arrayOfFiles
//     });
//   };

  handleCheckboxGroupChange = (name, values) => {
    this.setState({
      [name]: values
    });
  };

  render() {
    return (
      <main>
        <header>
          <h1>Create your project</h1>
        </header>
        <form onSubmit={this.handleFormSubmission}>
          <label htmlFor="input-title">Title</label>
          <input
            id="input-title"
            name="title"
            type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleInputChange}
            required
          />

        <label htmlFor="input-description">Description</label>
          <textarea
            id="input-description"
            name="description"
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleInputChange}
          />

          <div className="row">
            <div className="col">
              <label htmlFor="input-roles">Role Needed</label>
              <select
                id="input-roles"
                name="roles"
                value={this.state.rolesNeeded}
                onChange={this.handleInputChange}
                required
              >
                <option value="" disabled>
                  Roles Needed
                </option>
                <option value="ux-ui-designer">UX/UI Graduate</option>
                <option value="webdev">WebDev Graduate</option>
              </select>
            </div>

            <div className="col">
              <label htmlFor="input-skills">Skills Needed</label>
              <select
                id="input-skills"
                name="skillsNeeded"
                value={this.state.skillsNeeded}
                onChange={this.handleInputChange}
                required
              >
                <option value="" disabled>
                  Skills Needed
                </option>
                <option value="user-research">User Research</option>
                <option value="wireframes-prototyping">Wireframes/Prototyping</option>
                <option value="interface-design">Interface Design</option>
                <option value="html-css">HTML/CSS</option>
                <option value="vanilla-js">Vanilla Javascript</option>
                <option value="reactjs">React JS</option>
                <option value="nodejs">NodeJS</option>
              </select>
            </div>
          </div>

          {/* <label>Qualities</label>
          <CheckboxGroup
            options={qualitiesOptions}
            values={this.state.qualities}
            onUpdate={values =>
              this.handleCheckboxGroupChange('qualities', values)
            }
          /> */}


          <div className="row">
            <div className="col">
              <label htmlFor="input-creator">Project Creator</label>
              <input
                id="input-creator"
                name="projectCreator"
                type="text"
                placeholder="Project Creator"
                value={this.state.projectCreator}
                onChange={this.handleInputChange}
                
              />
            </div>
            <div className="col">
              <label htmlFor="input-status">Project Status</label>
              <select
                id="input-status"
                name="projectStatus"
                value={this.state.projectStatus}
                onChange={this.handleInputChange}
              >
                <option value="" disabled>status</option>
                <option value="not-started">Not Started Yet</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>

          <button>Create Project</button>
        </form>
      </main>
    );
  }
}

export default CreateProject;
