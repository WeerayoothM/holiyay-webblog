const Post = require('../models/Post');

exports.handleLikePost = async (req, res) => {
    const { postId } = req.params;
    const targetPost = await Post.findById(postId);
    if (targetPost.likes.includes(req.user.id)) {
        const index = targetPost.likes.findIndex(userId => userId === req.user.id);
        targetPost.likes.splice(index, 1);
        targetPost.save();
        return res.status(200).send({ isLike: false });
    } else {
        targetPost.likes.push(req.user.id)
        targetPost.save()
        return res.status(200).send({ isLike: true });
    }
}

exports.likePost = async (req, res) => {
    const { postId } = req.params;
    const targetPost = await Post.findById(postId);
    targetPost.likes.push(req.user.id)
    targetPost.save()
    res.status(201).send(targetPost);
}

exports.unlikePost = async (req, res) => {
    const { postId } = req.params;
    const targetPost = await Post.findById(postId);
    const index = targetPost.likes.findIndex(userId => userId === req.user.id);
    targetPost.likes.splice(index, 1);
    targetPost.save();
    res.status(204).send();
}