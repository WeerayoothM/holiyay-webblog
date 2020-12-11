const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

const passport = require('passport');
const auth = passport.authenticate("jwt-auth", { session: false });

router.post('/:postId', auth, commentController.createComment);
router.patch('/:postId/:commentId', auth, commentController.updateComment);
router.delete('/:postId/:commentId', auth, commentController.deleteComment);

module.exports = router;