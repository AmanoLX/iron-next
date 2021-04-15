// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { loadProject } from './../services/project';
// // import { Helmet } from 'react-helmet-async';
// // import PictureSlider from './../components/PictureSlider';
// // import {
// //   sizesOptions,
// //   speciesOptions,
// //   qualitiesOptions,
// //   getHumanReadableGender
// // } from './../common';

// //import './SingleProject.scss';

// class SingleProject extends Component {
//   state = {
//     project: null,
//     application: null
//   };

//   async componentDidMount() {
//     const { project, application } = await loadProject(this.props.match.params.id);
//     this.setState({ project, application });
//   }

// //   handleParticipationApplication = async () => {
// //     const application = await participateInProject(this.props.match.params.id);
// //     this.setState({ application });
// //   };

//   render() {
//     const project = this.state.project;
//     return (
//       <main className="page-single-project">
//         {project && (
//           <>
//             <Helmet>
//               <title>Pet Adopt - Adopt {pet.name}</title>
//             </Helmet>
//             {/* {!!pet.pictures.length && <PictureSlider pictures={pet.pictures} />} */}
//             <h1>{project.name}</h1>
//             {/* <span>
//               {speciesOptions.find(({ value }) => value === project.species).label}{' '}
//               | {project.breed} | {getHumanReadableGender(project.gender)}
//             </span>
//             <br />
//             <span>
//               {sizesOptions.find(({ value }) => value === project.size).label} |{' '}
//               {project.age}
//             </span>
//             <br />
//             <span>{!project.sterilized && 'Not '}sterilized</span>
//             <br />
//             {project.qualities.map(quality => (
//               <strong>
//                 {qualitiesOptions.find(({ value }) => value === quality).label}
//               </strong>
//             ))}
//             {project.description && <p>{project.description}</p>}
//             <span>
//               Up for adoption at{' '}
//               <Link to={`/shelter/${project.shelter._id}`}>{project.shelter.name}</Link>
//             </span>
//             <br /> */}
//             <button
//               className="button"
//               disabled={this.state.application}
//               onClick={this.handleParticipationApplication}
//             >
//               {(this.state.application && 'You are now working on this project!') || 'Participate in this project'}
//             </button>
//           </>
//         )}
//       </main>
//     );
//   }
// }

// export default SingleProject;
