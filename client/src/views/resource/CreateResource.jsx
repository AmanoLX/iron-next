import React, { Component } from 'react';
import { createResource } from './../../services/resource';

class CreateResource extends Component {
  state = {
    topic: '',
    title: '',
    url: '',
    type: '',
    description: '',
    creator: ''
  };

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
          <h1>Share a resource </h1>
        </header>

        <form onSubmit={this.handleFormSubmission}>
          <div className="row">
            <div className="col">
              <label htmlFor="input-topic">Topic to share</label>
              <select
                id="input-topic"
                name="topic"
                value={this.state.topic}
                onChange={this.handleInputChange}
                required
              >
                <option value="" disabled>
                  Topic
                </option>
                <option value="UX/UI Design">UX/UI Design</option>
                <option value="Web Development">Web Development</option>
              </select>
            </div>
            <div className="col">
              <label htmlFor="input-title">Title</label>
              <input
                id="input-title"
                name="title"
                type="text"
                placeholder="Example: HTML, CSS, JavaScript, React, Mongoose, Node Express ..."
                value={this.state.title}
                onChange={this.handleInputChange}
              />
              <div className="col">
                <label htmlFor="input-type">Type of resource</label>
                <select
                  id="input-type"
                  name="type"
                  value={this.state.type}
                  onChange={this.handleInputChange}
                  required
                >
                  <option value="" disabled>
                    Topic
                  </option>
                  <option value="book">Book</option>
                  <option value="video">Video</option>
                  <option value="article">Article</option>
                  <option value="blog">Blog</option>
                  <option value="podcast">Podcast</option>
                  <option value="course">Course</option>
                </select>
              </div>
              <div className="col">
                <label htmlFor="input-url">URL Link</label>
                <input
                  id="input-url"
                  name="url"
                  type="text"
                  placeholder="URL link"
                  value={this.state.url}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="col">
                <label htmlFor="input-description">Description</label>
                <textarea
                  id="input-description"
                  name="description"
                  placeholder="Short descripton of resource "
                  value={this.state.description}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
          </div>
          <button>Create resource</button>
        </form>
      </main>
    );
  }
}

export default CreateResource;
