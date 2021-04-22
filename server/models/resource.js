// THIS WILL BE THE RESOURCE MODEL

'use strict';

const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema(
  {
    topic: {
      type: String,
      enum: ['UX/UI Design', 'Web Development']
    },
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    type: {
      type: [String],
      enum: ['book', 'video', 'article', 'blog', 'podcast', 'course'],
      required: true
    },
    video: {
      type: String
    },
    description: {
      type: String
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: {
      createdAt: 'creationDate',
      updatedAt: 'updateDate'
    }
  }
);

module.exports = mongoose.model('Resource', resourceSchema);
