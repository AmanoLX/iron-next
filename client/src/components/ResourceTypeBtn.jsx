import React from 'react';

const ResourceTypeBtn = ({ type }) => {
	return (
		<button type='button' className='btn btn-outline-secondary me-2'>
			{type}
		</button>
	);
};

export default ResourceTypeBtn;
