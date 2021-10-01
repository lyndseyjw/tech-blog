const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const commentData = await Comment.create(req.body);
  
      req.session.save(() => {
        req.session.user_id = commentData.user_id;
  
        res.status(200).json(commentData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;