const router = require('express').Router();
const { Comment, User, Blogpost } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const commentData = await Comment.create(
        {
          content: req.body.content,
          user_id: req.session.user_id,
          blogpost_id: req.body.id
        }
      )   
      req.session.save(() => {
        req.session.user_id = commentData.user_id;
  
        res.status(200).json(commentData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
});

module.exports = router;