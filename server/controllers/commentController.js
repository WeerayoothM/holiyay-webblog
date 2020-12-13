const Post = require('../models/Post');


exports.createComment = async (req, res) => {
    const { postId } = req.params;
    const { content } = req.body;
    const targetPost = await Post.findById(postId);
    targetPost.comments.push({ content, author: req.user.id })
    targetPost.save()
    res.status(201).send(targetPost);
}

exports.updateComment = async (req, res) => {
    const { postId, commentId } = req.params;
    const { content } = req.body;
    const targetPost = await Post.findById(postId);
    const index = targetPost.comments.findIndex(comment => comment._id == commentId);
    targetPost.comments[index].content = content;
    targetPost.save();
    res.status(200).send(targetPost)
}

exports.deleteComment = async (req, res) => {
    const { postId, commentId } = req.params;
    const targetPost = await Post.findById(postId);
    const index = targetPost.comments.findIndex(comment => comment._id == commentId);
    targetPost.comments.splice(index, 1);
    targetPost.save();
    res.status(204).send();
}

