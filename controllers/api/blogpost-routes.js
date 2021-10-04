const router = require('express').Router();
const { Blogpost, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
  try {
    const newBlogpost = await Blogpost.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    });

    req.session.save(() => {
      req.session.user_id = newBlogpost.user_id;

      res.status(200).json(newBlogpost);
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {

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
    res.status(200).json(updateBlogpost);
  } catch (err) {
    res.status(500).json(err)
  }
})

router.delete('/:id', async (req,res) => {
  try {
    const deleteBlogpost = await Blogpost.destroy(
      {
        where: {
          id: req.params.id
        },
      });
      res.status(200).json(deleteBlogpost);
  } catch(err) {
    res.status(500).json(err)
  };
});

module.exports = router;