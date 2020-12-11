const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

const passport = require('passport');
const auth = passport.authenticate("jwt-auth", { session: false });


router.get('/', auth, postController.getAllPosts);
router.get('/:postId', auth, postController.getPost);
router.post('/', auth, postController.createPost);
router.patch('/:postId', auth, postController.updatePost);
router.delete('/:postId', auth, postController.deleteProduct);

module.exports = router;