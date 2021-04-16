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
    type: [String],
    enum: [
      'User Research',
      'Wireframes/Prototyping',
      'UI/UX Design',
      'Javascript',
      'HTML/CSS',
      'React JS',
      'Node JS'
    ],
    required: true
  },
  projectCreator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  projectStatus: {
    type: String,
    enum: ['Not started yet', 'In progress', 'Finishing', 'Completed'],
    required: true
  },
  timestamps: {
    createdAt: Date,
    updatedAt: Date
  }
});

module.exports = mongoose.model('Project', projectSchema);
