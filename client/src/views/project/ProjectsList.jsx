import { Component } from 'react';
import ProjectList from '../../components/ProjectList';
import { listProjects } from '../../services/project';

class ProjectsList extends Component {
  state = {
    projects: []
  };

  async componentDidMount() {
    const projects = await listProjects();
    this.setState({ projects });
  }

  render() {
    return (
      <div className="project_list">
        <small>List of Projects</small>
        <ProjectList projects={this.state.projects} />
      </div>
    );
  }
}

export default ProjectsList;
