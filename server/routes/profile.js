'use strict';

const express = require('express');
const User = require('./../models/user');
const fileUploadMiddleWare = require('./../middleware/file-upload');

const router = new express.Router();

router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.json({ user });
  } catch (error) {
    next(error);
  }
});

router.patch(
  '/:id/edit',
  fileUploadMiddleWare.single('profilePicture'),
  async (req, res, next) => {
    const {
      name,
      email,
      bio,
      city,
      country,
      graduateType,
      yearOfGraduation,
      githubURL,
      linkedInURL
    } = req.body;
    let profilePicture;
    if (req.file) {
      profilePicture = req.file.path;
    }
    const data = {
      name,
      email,
      bio,
      city,
      country,
      graduateType,
      yearOfGraduation,
      profilePicture,
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
  }
);

module.exports = router;
