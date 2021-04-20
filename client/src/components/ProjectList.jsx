import { Link } from 'react-router-dom';
import ProjectItem from './ProjectItem';

const ProjectList = ({ projects }) => {
  return (
    <div>
      {projects.map((project) => (
        <Link key={project._id} to={`/project/${project._id}`}>
          <ProjectItem
            project={project}
          />
        </Link>
      ))}
    </div>
  );
};

export default ProjectList;
