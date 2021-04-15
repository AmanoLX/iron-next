import React, { Component } from 'react';
import { createProject } from './../../services/project';

class CreateProject extends Component {
  state = {
    title: '',
    description: '',
    roleNeeded: [],
    skillsNeeded: [],
    projectCreator: '',
    projectStatus: []
  };

  handleFormSubmission = async (event) => {
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

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <main>
        <header>
          <h1>Create a project </h1>
        </header>

        <form onSubmit={this.handleFormSubmission}>
          <div className="row">
            <div className="col">
              <label htmlFor="input-title">Project title</label>
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
            </div>

            <div className="col">
              <label htmlFor="input-roles">Role Needed</label>
              <select
                id="input-roles"
                name="roleNeeded"
                value={this.state.roleNeeded}
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
                <option value="User Research">User Research</option>
                <option value="Wireframes/Prototyping">
                  Wireframes/Prototyping
                </option>
                <option value="Interface Design">Interface Design</option>
                <option value="html-css">HTML/CSS</option>
                <option value="Vanilla Javascript">Vanilla Javascript</option>
                <option value="HTML/CSS">HTML/CSS</option>
                <option value="React JS">React JS</option>
                <option value="Node JS">NodeJS</option>
              </select>
            </div>
          </div>

          <div className="row">
            {/* <div className="col">
                  <label htmlFor="input-creator">Project Creator</label>
                  <input
                    id="input-creator"
                    name="projectCreator"
                    type="text"
                    placeholder="Project Creator"
                    value={this.state.projectCreator}
                    onChange={this.handleInputChange}
                  />
                </div> */}
            <div className="col">
              <label htmlFor="input-status">Project Status</label>
              <select
                id="input-status"
                name="projectStatus"
                value={this.state.projectStatus}
                onChange={this.handleInputChange}
              >
                <option value="" disabled>
                  status
                </option>
                <option value="Not started yet">Not Started Yet</option>
                <option value="In progress">In Progress</option>
                <option value="Completed">Completed</option>
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
