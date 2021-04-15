'use strict';
const express = require('express');

const Project = require('./../models/project');
//const User = require('./../models/user');
// const Application = require('./../models/application');
//const fileUpload = require('./../middleware/file-upload');

const router = new express.Router();

router.post('/create', async (req, res, next) => {
  const {
    title,
    description,
    roleNeeded,
    skillsNeeded,
    projectStatus
  } = req.body;
  try {
    const project = await Project.create({
      title,
      description,
      roleNeeded,
      skillsNeeded,
      projectStatus
    });
    res.json({ project });
    console.log(project);
  } catch (error) {
    next(error);
  }
});

// router.get('/list', async (req, res, next) => {
//   try {
//     const projects = await Project.find().sort({ addedDate: -1 }).limit(20);
//     res.json({ projects });
//   } catch (error) {
//     next(error);
//   }
// });

// router.get('/:id', async (req, res, next) => {
//   try {
//     const project = await Project.findById(req.params.id).populate(
//       'user',
//       'name'
//     );
//     let application = null;
//     if (req.user) {
//       application = await Application.findOne({
//         project: req.params.id,
//         user: req.user._id
//       });
//     }
//     res.json({ project, application });
//   } catch (error) {
//     next(error);
//   }
// });

// router.patch('/:id', async (req, res, next) => {
//   // ...
// });

// router.delete('/:id', routeGuard, async (req, res, next) => {
//   try {
//     await Project.findByIdAndDelete(req.params.id);
//     res.json({});
//   } catch (error) {
//     next(error);
//   }
// });

// router.post('/:id/participate', routeGuard, async (req, res, next) => {
//     try {
//       const application = await Application.create({
//         user: req.user._id,
//         project: req.params.id
//       });
//       const project = await Project.findById(req.params.id);
//       const creator = await User.findById(pet.creator);
//       await sendEmail({
//         receiver: shelter.email,
//         subject: `${req.user.name} applied to participate in project ${project.title}`,
//         body: `
//           <p>${req.user.name} applied to participate in project ${project.title}.</p>
//           <p>${req.user.name}'s email is "${req.user.email}".</p>
//         `
//       });
//       res.json({ application });
//     } catch (error) {
//       console.log(error);
//       next(error);
//     }
//   });

module.exports = router;
