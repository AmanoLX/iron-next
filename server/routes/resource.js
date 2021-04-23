const express = require('express');

const Resource = require('./../models/resource');

const router = new express.Router();

router.post('/create', async (req, res, next) => {
  const {
    topic,
    title,
    url,
    type,
    video,
    description
    // creator,
    // timestamps
  } = req.body;
  try {
    console.log(req.body);
    const resource = await Resource.create({
      topic,
      title,
      url,
      type,
      video,
      description,
      creator: req.user._id
    });
    res.json({ resource });
    console.log(resource);
  } catch (error) {
    next(error);
  }
});

router.get('/list', async (req, res, next) => {
  try {
    const resources = await Resource.find()
      .sort({ addedDate: -1 })
      .limit(5)
      .populate('creator');
    res.json({ resources });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const resource = await Resource.findById(req.params.id).populate({
      path: 'creator'
    });
    //let application = null;
    // let resource;
    //   if (req.user) {
    //     application = await Application.findOne({
    //       pet: req.params.id,
    //       individual: req.user._id
    //     });
    //   }
    res.json({ resource: resource });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id/delete', async (req, res, next) => {
  try {
    const resource = await Resource.findByIdAndDelete(req.params.id);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.patch('/:id/edit', async (req, res, next) => {
  const { topic, title, url, type, video, description } = req.body;
  const data = {
    topic,
    title,
    url,
    type,
    video,
    description
  };
  try {
    const resource = await Resource.findByIdAndUpdate(req.params.id, data);
    res.json({ resource: resource });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
