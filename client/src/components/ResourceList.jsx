import { Link } from 'react-router-dom';
import ResourceItem from './ResourceItem';

const ResourceList = ({ resources }) => {
	return (
		<div className='list-group'>
			{resources.map(resource => (
				<Link key={resource._id} to={`/resource/${resource._id}`}>
					<ResourceItem resource={resource} />
				</Link>
			))}
		</div>
	);
};

export default ResourceList;
