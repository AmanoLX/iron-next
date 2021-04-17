const ResourceItem = ({ resource }) => {
  return (
    <div>
      <div>
        <h5>{resource.title}</h5>
        <p>
          {resource.topic} | {resource.type}| {resource.description}
        </p>
        <small>Shared by {resource.creator.name}</small>
      </div>
    </div>
  );
};

export default ResourceItem;
