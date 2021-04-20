'use strict';
const express = require('express');

const Project = require('./../models/project');
const User = require('./../models/user');
const Participation = require('./../models/participation');
//const fileUpload = require('./../middleware/file-upload');

const router = new express.Router();

// Create project
router.post('/create', async (req, res, next) => {
  const {
    title,
    description,
    roleNeeded,
    skillsNeeded,
    projectStatus
    // creator,
    // timestamps
  } = req.body;
  try {
    console.log(req.body);
    const project = await Project.create({
      title,
      description,
      roleNeeded,
      skillsNeeded,
      projectStatus,
      creator: req.user._id
    });
    res.json({ project });
    console.log(project);
  } catch (error) {
    next(error);
  }
});

router.get('/list', async (req, res, next) => {
  try {
    const projects = await Project.find()
      .sort({ addedDate: -1 })
      .limit(5)
      .populate('creator');
    res.json({ projects });
  } catch (error) {
    next(error);
  }
});

// Single project
router.get('/:id', async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id).populate({
      path: 'creator'
    });
    let participation = null;
    if (req.user) {
      participation = await Participation.findOne({
        project: req.params.id,
        user: req.user._id
      });
    }
    res.json({ project, participation });
  } catch (error) {
    next(error);
  }
});

// Project list

//Edit single project
router.patch('/:id', async (req, res, next) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.paramas.id,
      { Title: req.body.title },
      { Description: req.body.description },
      { RoleNeeded: req.body.roleNeeded },
      { SkillsNeeded: req.body.skillsNeeded },
      { ProjectStatus: req.body.projectStatus }
    );
    res.json({ project });
  } catch (error) {
    next(error);
  }
});

// Delete single project
router.delete('/:id', async (req, res, next) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({});
  } catch (error) {
    next(error);
  }
});

router.post('/:id/participate', async (req, res, next) => {
  try {
    const participation = await Participation.create({
      user: req.user._id,
      project: req.params.id
    });
    // const project = await Project.findById(req.params.id);
    // const creator = await User.findById(project.creator);
    // await sendEmail({
    //   receiver: shelter.email,
    //   subject: `${req.user.name} applied to participate in project ${project.title}`,
    //   body: `
    //       <p>${req.user.name} applied to participate in project ${project.title}.</p>
    //       <p>${req.user.name}'s email is "${req.user.email}".</p>
    //     `
    // });
    res.json({ participation });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
