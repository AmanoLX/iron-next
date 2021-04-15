import React, { Component } from 'react';
import { getSingleResource } from './../../services/resource';
import { Link } from 'react-router-dom';

class SingleResource extends Component {
  state = {
    resource: null
  };

  async componentDidMount() {
    const { resource } = await getSingleResource(this.props.match.params.id);
    this.setState({ resource });
  }

  render() {
    const resource = this.state.resource;
    return (
      <div>
        {resource && (
          <div>
            <h1>{resource.title}</h1>
            <h2>{resource.url}</h2>
            <span>
              {resource.type} {resource.description}{' '}
            </span>
            <br />
            <span>
              Shared by {resource.creator}
              {/* // on {resource.timestamps.createdAt} */}
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default SingleResource;
