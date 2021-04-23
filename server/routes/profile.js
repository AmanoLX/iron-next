'use strict';

const express = require('express');
const User = require('./../models/user');
// const fileUploadMiddleWare = require('./../middleware/file-upload');

const router = new express.Router();

router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.json({ user });
  } catch (error) {
    next(error);
  }
});

router.patch('/:id/edit', async (req, res, next) => {
  const {
    name,
    email,
    profilePicture,
    bio,
    city,
    country,
    graduateType,
    yearOfGraduation,
    githubURL,
    linkedInURL
  } = req.body;
  const data = {
    name,
    email,
    profilePicture,
    bio,
    city,
    country,
    graduateType,
    yearOfGraduation,
    githubURL,
    linkedInURL
  };
  console.log(data);
  try {
    const user = await User.findByIdAndUpdate(req.params.id, data);
    res.json({ user });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
