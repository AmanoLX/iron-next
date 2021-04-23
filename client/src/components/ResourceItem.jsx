import React from 'react';
import ResourceTypeBtn from './ResourceTypeBtn';

const ResourceItem = ({ resource }) => {
	return (
		<>
			<li
				className='list-group-item list-group-item-action py-3'
				aria-current='true'>
				<div>
					<h3>{resource.title}</h3>
					<h5>Created by {resource.creator.name}</h5>
					<div>
						{/* Topic Btn */}
						<button type='button ' className='btn btn-primary me-3'>
							{resource.topic}
						</button>
						{/* Resource Type Btn's */}
						{resource.type.map(eachType => {
							return <ResourceTypeBtn type={eachType} key={eachType} />;
						})}
					</div>
				</div>
			</li>
		</>
	);
};

export default ResourceItem;
