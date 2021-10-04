const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const commentData = await Comment.create(
        {
          content: req.body.content,
          user_id: req.session.user_id,
          blogpost_id: req.body.blogpost_id
        }
      )   

      res.status(200).json(commentData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;