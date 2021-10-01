const router = require('express').Router();
const { Blogpost } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newBlogpost = await Blogpost.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlogpost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {

  try {
    const updateBlogpost = await Blogpost.update(
      {
        // All the fields you can update and the data attached to the request body.
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id
      },
      {
      where: {
        id: req.params.id
      },
    });
    res.status(200).json({message: 'Success!'});
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router;