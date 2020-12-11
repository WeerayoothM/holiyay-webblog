const Post = require('../models/Post')

exports.getAllPosts = async (req, res) => {
    const posts = await Post.find({})
    res.status(200).send(posts)
}

exports.getPost = async (req, res) => {
    try {
        const { postId } = req.params;
        const post = await Post.findById(postId)
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });         //! 500 เป็น internal err
    }
}

exports.createPost = async (req, res) => {
    try {
        const { title, content, category } = req.body;
        console.log(title, content, category)
        const newPost = await Post.create({
            author: req.user.id,
            title,
            content,
            category
        })
        res.status(201).json({ newPost });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.updatePost = async (req, res) => {
    try {
        const { postId } = req.params;
        const { title, content, category } = req.body;
        const post = await Post.findById(postId)

        if (title) post.title = title;
        if (content) post.content = content;
        if (category) post.category = category;

        await post.save()

        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });         //! 500 เป็น internal err
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const { postId } = req.params;
        await Post.findByIdAndDelete(postId)
        res.status(204).json()
    } catch (err) {
        res.status(500).json({ message: err.message });         //! 500 เป็น internal err
    }
};