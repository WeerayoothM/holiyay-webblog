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
    // targetPost.comment
    res.status(201).send("update")
}

exports.deleteComment = async (req, res) => {
    const { postId, commentId } = req.params;
    await Post.findByIdAndDelete(postId);

    res.status(204).send()

}

