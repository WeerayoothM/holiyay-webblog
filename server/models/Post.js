const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        content: [{ type: String, required: true, }],
        likes: [{ type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" }],
        hates: [{ type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" }],
        hashtags: [{ type: String }],
        category: {
            type: String,
            required: true,
            trim: true
        },
        comments: [
            {
                content: String,
                date: { type: Date, default: Date.now },
                author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
                likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }],
                hates: [{ type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }],
                hashtags: [{ type: String }],
            },
        ]
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Post", postSchema);