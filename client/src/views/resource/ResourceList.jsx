import { Link } from 'react-router-dom';
import SingleResource from './SingleResource';

const ResourceList = ({ resources }) => {
	return (
		<section className='d-flex justify-content-center align-items-center'>
			<div className='card form-card bg-light w-100'>
			<div className='row g-0'>
							<div className='col'>
				<div className='resource_list'>
					{resources.map(resource => (
						<Link key={resource._id} to={`/project/${resource._id}`}>
							<SingleResource project={resource} />
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};

export default ResourceList;
