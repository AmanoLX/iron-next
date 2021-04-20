// import { Component } from 'react';

// class EditSingleProject extends Component {
//   state = {
//     editModeActive: false,
//     newProjectTitle: '',
//     newProjectDescription: '',
//     newProjectRoleNeeded: '',
//     possibleSkillsNeeded: [
//         {
//           value: 'User Research',
//           label: 'User Research'
//         },
//         {
//           value: 'Wireframes/Prototyping',
//           label: 'Wireframes/Prototyping'
//         },
//         {
//           value: 'UI/UX Design',
//           label: 'UI/UX Design'
//         },
//         {
//           value: 'HTML/CSS',
//           label: 'HTML/CSS'
//         },
//         {
//           value: 'Javascript',
//           label: 'Javascript'
//         },
//         {
//           value: 'Node JS',
//           label: 'Node JS'
//         },
//         {
//           value: 'React JS',
//           label: 'React JS'
//         }
//       ],
//     newProjectSkillsNeeded: [],
//     newProjectStatus: ''
//   };

//   toggleTaskEditMode = () => {
//     this.setState({
//       editModeActive: true,

//       newProjectTitle: this.props.project.title,
//       newProjectDescription: this.props.project.description,
//       newProjectRoleNeeded: this.props.project.roleNeeded,
//       newProjectSkillsNeeded: this.props.project.skillsNeeded,
//       newProjectStatus: this.props.project.projectStatus
//     });
//   };

//   handleProjectChange = event => {
//     const value = event.target.value;
//     this.setState({
//         newProjectTitle: value,
//         newProjectDescription: value,
//         newProjectRoleNeeded: value,
//         newProjectSkillsNeeded: value,
//         newProjectStatus: value
//     });
//   };

//   handleProjectChangeValidation = event => {
//     event.preventDefault();
//     this.props.onTaskEdit(
//         this.state.newProjectTitle,
//         this.state.newProjectDescription,
//         this.state.newProjectRoleNeeded,
//         this.state.newProjectSkillsNeeded,
//         this.state.newProjectStatus);
//     this.setState({ editModeActive: false });
//   };

//   render() {
//     return (
//       <li>
//         {(this.state.editModeActive && (
//           <form onSubmit={this.handleProjectChangeValidation}>
//             <input
//               type="text"
//               placeholder="New task title"
//               value={this.state.newProjectTitle}
//               onChange={this.handleProjectChange}
//             />
//             <button>🔒</button>
//           </form>
//         )) || (
//           <>
//             {this.props.project.title}
//             <button onClick={this.toggleTaskEditMode}>✏️</button>
//             <button onClick={this.props.onRemoveTask}>✔️</button>
//           </>
//         )}
//       </li>
//     );
//   }
// }

// export default EditSingleProject;
