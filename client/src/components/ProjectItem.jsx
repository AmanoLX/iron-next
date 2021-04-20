const ProjectItem = ({ project }) => {
  return (
    <div>
      <div>
        <h5>{project.title}</h5>
        <h2>{project.projectStatus}</h2>
        <p>
          <span>{project.description}</span>
          <span>
            {project.roleNeeded} {project.skillsNeeded}
          </span>
        </p>
        <small>Shared by: {project.creator && project.creator.name}</small>
      </div>
    </div>
  );
};

export default ProjectItem;

// import { Component } from 'react';
// //import {editProject, deleteProject, participateInProject } from './../../services/project';

// class ProjectItem extends Component {
//   state = {
//     editModeActive: false,
//     newProjectTitle: ''
//   };

//   toggleProjectEditMode = () => {
//     this.setState({
//       editModeActive: true,
//       newProjectTitle: this.props.project.title
//     });
//   };

//   handleProjectChange = (event) => {
//     const value = event.target.value;
//     this.setState({
//       newProjectTitle: value
//     });
//   };

//   handleProjectChangeValidation = (event) => {
//     event.preventDefault();
//     this.props.onProjectEdit(this.state.newProjectTitle);
//     this.setState({ editModeActive: false });
//   };

//   render() {
//     return (
//       <div>
//         <div>
//           <h1>{this.project.title}</h1>
//           {(this.state.editModeActive && (
//             <form onSubmit={this.handleProjectChangeValidation}>
//               <input
//                 type="text"
//                 placeholder="New project title"
//                 value={this.state.newProjectTitle}
//                 onChange={this.handleProjectChange}
//               />
//               <button>Save project</button>
//             </form>
//           )) || (
//             <>
//               <h2>{this.project.projectStatus}</h2>
//               <span>{this.project.description}</span>
//               <br />
//               <span>
//                 {this.project.roleNeeded} {this.project.skillsNeeded}
//               </span>
//               <small>
//                 Shared by: {this.project.creator && this.project.creator.name}
//               </small>
//               <button onClick={this.toggleProjectEditMode}>Edit project</button>
//             </>
//           )}
//         </div>
//       </div>
//     );
//   }
// }

// export default ProjectItem;

// // handleProjectEdit = (id, title) => {
// //   console.log(id, title);
// // };

// // onProjectEdit={(title) =>
// //   this.handleProjectEdit(project._id, title)
