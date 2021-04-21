import React from 'react';
import ProjectTypeBtn from './ProjectTypeBtn';

const ProjectItem = ({ project }) => {
	return (
		<li
			className='list-group-item list-group-item-action py-3'
			aria-current='true'>
			<div>
				<h3>{project.title}</h3>
				<h5>Created by {project.creator.name}</h5>
				<div>
					{/* Topic Btn */}
					<button type='button ' className='btn btn-secondary me-3'>
						{project.roleNeeded}
					</button>
					{/* Project Type Btn's */}
					{project.skillsNeeded.map(eachType => {
						return <ProjectTypeBtn type={eachType} key={eachType} />;
					})}
				</div>
			</div>
		</li>
	);
};

export default ProjectItem;
