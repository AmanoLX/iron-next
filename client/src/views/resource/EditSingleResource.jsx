import React, { Component } from 'react';
import {
  getSingleResource,
  editSingleResource,
  deleteSingleResource
} from './../../services/resource';
import CheckboxGroup from './../../components/CheckboxGroup';
//import resource from '../../../../server/models/resource';

class EditSingleResource extends Component {
  state = {
    topic: '',
    title: '',
    url: '',
    possibleTypes: [
      {
        value: 'book',
        label: 'Book'
      },
      {
        value: 'video',
        label: 'Video'
      },
      {
        value: 'article',
        label: 'Article'
      },
      {
        value: 'blog',
        label: 'Blog'
      },
      {
        value: 'podcast',
        label: 'Podcast'
      },
      {
        value: 'course',
        label: 'Course'
      }
    ],
    type: [],
    description: '',
    creator: ''
  };

  async componentDidMount() {
    const { resource } = await getSingleResource(this.props.match.params.id);
    console.log('RESOURCE', resource);
    // this.setState({ resource });
    this.setState({
      topic: resource.topic,
      title: resource.title,
      url: resource.url,
      type: resource.type,
      description: resource.description
    });
  }

  handleFormSubmission = async (event) => {
    event.preventDefault();
    const { topic, title, url, type, description } = this.state;
    const data = {
      topic,
      title,
      url,
      type,
      description
    };
    await editSingleResource(this.props.match.params.id, data);
    this.props.history.push(`/resource/${this.props.match.params.id}`);
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { topic, title, url, possibleTypes, type, description } = this.state;
    console.log(this.props.resource);
    return (
      <section className="d-flex justify-content-center align-items-center">
        <div className="card form-card bg-light p-5 w-100">
          <div className="row g-0">
            <div className="card-body">
              <div className="row d-flex align-items-center">
                <form onSubmit={this.handleFormSubmission}>
                  <div className="mb-3">
                    <div className="row w-100 d-flex align-items-center ml-0">
                      {/* Title */}
                      <label
                        htmlFor="input-title"
                        className="col-md-4 col-form-label pl-0"
                      >
                        {/* <h2>{this.props.resource.title}</h2> */}
                      </label>

                      <input
                        className="form-control col-md-8"
                        type="text"
                        id="input-title"
                        aria-describedby="title"
                        name="title"
                        placeholder="title"
                        // {
                        //   //this.state.resource && this.state.resource.title
                        // }
                        required
                        value={this.state.title}
                        onChange={this.handleInputChange}
                      />
                    </div>
                  </div>

                  {/* Link */}
                  <div className="mb-3">
                    <label htmlFor="input-url" className="form-label">
                      Resource link
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="input-url"
                      aria-describedby="url"
                      name="url"
                      placeholder={
                        this.state.resource && this.state.resource.url
                      }
                      required
                      value={url}
                      onChange={this.handleInputChange}
                    />
                  </div>

                  {/* Topic */}
                  <div className="mb-3">
                    <label htmlFor="input-topic" className="form-label">
                      Topic to share
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      id="input-topic"
                      name="topic"
                      value={topic}
                      onChange={this.handleInputChange}
                      required
                    >
                      <option value="" disabled>
                        Main topic
                      </option>
                      <option value="UX/UI Design">UX/UI Design</option>
                      <option value="Web Development">Web Development</option>
                    </select>
                  </div>

                  {/* Type */}
                  <div className="mb-2 d-flex flex-column">
                    <label htmlFor="input-type" className="form-label">
                      Type of resource
                    </label>
                    <div className="d-flex">
                      <CheckboxGroup
                        options={possibleTypes}
                        values={type}
                        onUpdate={(values) =>
                          this.handleCheckboxGroupChange('type', values)
                        }
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="input-description" className="form-label">
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      rows="5"
                      id="input-description"
                      name="description"
                      placeholder="Short descripton of resource "
                      value={description}
                      onChange={this.handleInputChange}
                    />
                  </div>

                  <div className="d-grid">
                    <>
                      <button
                        className="btn btn-secondary"
                        //onClick={() => this.handleEdit(resource._id)}
                      >
                        Save
                      </button>
                    </>
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

export default EditSingleResource;

// /   handleFormSubmission = (event) => {
//     event.preventDefault();
//     const title = this.state.newTask;
//     if (title) {
//       this.setState({ newTask: '' });
//       this.props.onTaskCreate(title);
//     }
//   };

//   handleNewTaskChange = (event) => {
//     const value = event.target.value;
//     this.setState({
//       newTask: value
//     });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleFormSubmission}>
//         <input
//           type="text"
//           placeholder="Update new task here..."
//           onChange={this.handleNewTaskChange}
//           value={this.state.newTask}
//         />
//         <button>Edit</button>
//       </form>
//     );
//   }
// }
