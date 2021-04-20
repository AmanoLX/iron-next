import { Component } from 'react';
import { Link } from 'react-router-dom';
import SingleProject from './../../components/SingleProject';
import { listProjects } from './../../services/project';

class ProjectList extends Component {
  state = {
    projects: []
  };

  async componentDidMount() {
    const projects = await listProjects();
    this.setState({ projects });
  }

  render() {
    const projects = this.state.projects;
    return (
      <div className="project_list">
        {projects.map((project) => (
          <Link key={project._id} to={`/project/${project._id}`}>
            <SingleProject project={project} />
          </Link>
        ))}
      </div>
    );
  }
}

export default ProjectList;
