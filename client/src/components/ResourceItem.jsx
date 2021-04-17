const ResourceItem = ({ resource }) => {
  return (
    <div>
      <div>
        <h5>{resource.title}</h5>
        <p>
          <span>Topic: {resource.topic}</span>
          <br />
          <span>Type: {resource.type}</span>
          <br />
          <span>Description: {resource.description}</span>
          {/* {resource.topic} | {resource.type}| {resource.description} */}
        </p>
        <small>Shared by: {resource.creator.name}</small>
      </div>
    </div>
  );
};

export default ResourceItem;
