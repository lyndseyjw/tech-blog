const router = require('express').Router();
const userRoutes = require('./user-routes');
const dashboardRoutes = require('./dashboard-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
