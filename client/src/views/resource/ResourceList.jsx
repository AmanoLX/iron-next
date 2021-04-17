import { Link } from 'react-router-dom';
import SingleResource from './SingleResource';

const ResourceList = ({ resources }) => {
	return (
		<div className='resource_list'>
			{resources.map(resource => (
				<Link key={resource._id} to={`/project/${resource._id}`}>
					<SingleResource project={resource} />
				</Link>
			))}
		</div>
	);
};

export default ResourceList;
