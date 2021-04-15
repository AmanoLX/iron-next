import React, { Component } from 'react';
import { getSingleResource } from './../../services/resource';

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
        <h1>Test - Single Resource</h1>
      </div>
    );
  }
}

export default SingleResource;
