'use strict';

const mongoose = require('mongoose');

const participationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Project'
    }
  },
  {
    timestamps: {
      createdAt: 'addedDate',
      updatedAt: 'editDate'
    }
  }
);

module.exports = mongoose.model('Participation', participationSchema);
