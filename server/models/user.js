'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  passwordHashAndSalt: {
    type: String,
    required: true
  },
  profilePicture: {
    type: String
  },
  graduateType: {
    type: String,
    enum: ['WebDev Graduate', 'UX/UI Graduate']
  },
  yearOfGraduation: {
    type: String
  },
  bio: {
    type: String
  },
  city: {
    type: String
  },
  country: {
    type: String
  },
  githubURL: {
    type: String
  },
  linkedInURL: {
    type: String
  }
});

module.exports = mongoose.model('User', schema);
