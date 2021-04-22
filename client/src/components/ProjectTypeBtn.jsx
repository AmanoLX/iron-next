import React from 'react';

const ProjectTypeBtn = ({ type }) => {
  return (
    <button type="button" className="btn btn-sm btn-outline-secondary me-2">
      {type}
    </button>
  );
};

export default ProjectTypeBtn;
