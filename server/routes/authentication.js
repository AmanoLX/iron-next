'use strict';

const { Router } = require('express');

const bcryptjs = require('bcryptjs');
const User = require('./../models/user');

const fileUploadMiddleWare = require('./../middleware/file-upload');
const router = new Router();

router.post(
  '/sign-up',
  fileUploadMiddleWare.single('profilePicture'),
  async (req, res, next) => {
    console.log(req.body);
    console.log(req.file);

    let picture;
    if (req.file) {
      picture = req.file.path;
    }

    const { name, email, password } = req.body;
    try {
      const hash = await bcryptjs.hash(password, 10);
      const user = await User.create({
        name,
        email,
        passwordHashAndSalt: hash,
        profilePicture: picture
      });
      req.session.userId = user._id;
      res.json({ user });
    } catch (error) {
      next(error);
    }
  }
);

router.post('/sign-in', (req, res, next) => {
  let user;
  const { email, password } = req.body;
  User.findOne({ email })
    .then((document) => {
      if (!document) {
        return Promise.reject(new Error("There's no user with that email."));
      } else {
        user = document;
        return bcryptjs.compare(password, user.passwordHashAndSalt);
      }
    })
    .then((result) => {
      if (result) {
        req.session.userId = user._id;
        res.json({ user });
      } else {
        return Promise.reject(new Error('Wrong password.'));
      }
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/sign-out', (req, res) => {
  req.session.destroy();
  res.json({});
});

router.get('/verify', (req, res) => {
  const user = req.user || null;
  res.json({ user: user });
});

module.exports = router;
