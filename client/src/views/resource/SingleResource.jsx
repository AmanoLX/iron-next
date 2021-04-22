import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  getSingleResource,
  deleteSingleResource,
  editSingleResource
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

  handleDelete = async (id) => {
    await deleteSingleResource(id);
  };

  render() {
    const resource = this.state.resource;

    console.log('user:', this.props.user);
    if (this.state.resource) {
      console.log('resource creator:', this.state.resource.creator._id);
    }

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

            {this.props.user && this.props.user._id === resource.creator._id && (
              <>
                <Link to={`/resource/${resource._id}/edit`}>
                  {/* {' '} */}
                  <button
                    className="btn btn-secondary"
                    // onClick={`/resource/${resource._id}/edit`}
                  >
                    Edit Resource
                  </button>
                </Link>

                <Link to={'/resource/list'}>
                  <button
                    className="btn btn-secondary"
                    onClick={() => this.handleDelete(resource._id)}
                  >
                    Delete Resource
                  </button>
                </Link>
                {/* <Link to={`/resource/${id}/delete`}>Delete</Link> */}
              </>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default SingleResource;
