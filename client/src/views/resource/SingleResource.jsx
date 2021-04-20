import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  getSingleResource,
  deleteSingleResource
} from './../../services/resource';
// import { editSingleResource } from './../../services/resource';
// import { deleteSingleResource } from './../../services/resource';

class SingleResource extends Component {
  state = {
    //resource: null,
    resource: '',
    //time: null,
    user: ''
    //user: this.props.user
  };

  async componentDidMount() {
    const { resource } = await getSingleResource(this.props.match.params.id);
    this.setState({ resource });
  }

  handleDelete = async () => {
    await deleteSingleResource(this.props.match.params.id);
  };

  // handleFormSubmission = async event => {
  // 	event.preventDefault();
  // 	const { name, email, password, profilePicture, graduateType } = this.state;

  // 	const user = await signUp({
  // 		name,
  // 		email,
  // 		password,
  // 		profilePicture,
  // 		graduateType,
  // 	});
  // 	console.log(user);
  // 	this.props.onUserChange(user);

  //   handleEdit = async () => {
  //     await editSingleResource(this.props.match.params.id);
  //     this.setState({ resource });
  //   };

  render() {
    const resource = this.state.resource;

    return (
      <div>
        {resource && (
          <div>
            <h1>{resource.title}</h1>
            <h2>{resource.url}</h2>
            <span>
              {resource.type} {resource.description}{' '}
            </span>
            <br />
            <span>Shared by {resource.creator.name}</span>
            <button className="btn btn-secondary" onClick={this.handleDelete}>
              Delete Resource
            </button>

            {this.props.user && this.props.user._id === resource.creator._id && (
              <>
                <Link to={`/resource/${resource._id}/edit`}>Edit</Link>
              </>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default SingleResource;

{
  /* <button onClick={this.handleEdit}>Edit</button>{' '} */
}
{
  /* <button onClick={this.handleResourceDelete(resource._id)}>
                  Delete
                </button> */
}
