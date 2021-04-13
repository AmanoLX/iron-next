const express = require('express');

const Resource = require('./../models/resource');

const router = new express.Router();

router.post('/create', async (req, res, next) => {
  const {
    topic,
    title,
    url,
    type,
    description,
    creator,
    timestamps
  } = req.body;
  try {
    const resource = await Resource.create({
      topic,
      title,
      url,
      type,
      description,
      creator: req.user._id,
      timestamps
    });
    res.json({ resource });
    console.log(resource);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
