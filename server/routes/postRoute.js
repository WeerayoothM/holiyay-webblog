const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const likeController = require('../controllers/likeController');
const passport = require('passport');
const auth = passport.authenticate("jwt-auth", { session: false });


router.get('/', postController.getAllPosts);
router.get('/:postId', postController.getPost);
router.post('/', auth, postController.createPost);
router.patch('/:postId', auth, postController.updatePost);
router.delete('/:postId', auth, postController.deleteProduct);

router.patch('/like/:postId', auth, likeController.handleLikePost);
// router.delete('/like/:postId', auth, likeController.unlikePost);


module.exports = router;