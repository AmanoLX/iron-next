'use strict';

const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  roleNeeded: {
    type: String,
    enum: ['UX/UI Graduate', 'WebDev Graduate'],
    required: true
  },
  skillsNeeded: {
    type: String,
    enum: [
      'User Research',
      'Wireframes/Prototyping',
      'Interface Design',
      'Vanilla Javascript',
      'HTML/CSS',
      'React JS',
      'Node JS'
    ],
    required: true
  },
  projectCreator: {
    type: String,
    required: true
  },
  projectStatus: {
    type: String,
    enum: ['Not started yet', 'In progress', 'Completed'],
    required: true
  },
  timestamps: {
    createdAt: 'addedDate',
    updatedAt: 'editDate'
  }
});

module.exports = mongoose.model('Project', projectSchema);
