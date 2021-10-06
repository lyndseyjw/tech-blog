const router = require('express').Router();
const { read } = require('fs');
const { Blogpost, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const blogpostData = await Blogpost.findAll({
      include: [
        {
          model: User
        },
      ],
    });

    // Serialize data so the template can read it
    const blogposts = blogpostData.map(blogpost => blogpost.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      blogposts, 
      logged_in: req.session.logged_in,
      userId: req.session.user_id 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      include: [{ model: Blogpost }],
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      layout:"dashmain",
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/blogpost/:id', withAuth, async (req, res) => {
  try {
    const blogpostData = await Blogpost.findByPk(req.params.id, {
      include: [
        {
          model: User
        },
        {
          model: Comment,
          include: [{model: User}]
        }
      ],
    });

    const blogpost = blogpostData.get({ plain: true });

    // res.json(blogpost)

    res.render('blogpost', {
      blogpost,
      logged_in: req.session.logged_in,
      userId: req.session.user_id
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/new', (req, res) => {
  
  res.render('new');
});

router.get('/edit/:id', async (req, res) => {
  try {
    const blogpostData = await Blogpost.findByPk(req.params.id, {
      include: [
        {
          model: User
        },
      ],
    });

    const blogpost = blogpostData.get({ plain: true });

    // res.json(blogpost)

    res.render('edit', {
      layout:"dashmain",
      blogpost,
      logged_in: req.session.logged_in,
      userId: req.session.user_id
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

module.exports = router;
