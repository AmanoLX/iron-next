import React, { Component } from 'react';
import { listResources } from '../../services/resource';
import ResourceList from '../../components/ResourceList';

class ResourcesList extends Component {
  state = {
    resources: []
  };

  async componentDidMount() {
    const resources = await listResources();
    this.setState({ resources });
  }

  render() {
    return (
      <main>
        <header>List of Resources</header>
        <ResourceList resources={this.state.resources} />
      </main>
    );
  }
}

export default ResourcesList;
