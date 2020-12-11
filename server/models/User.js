const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true
        },
        lastName: {
            type: String,
            required: true,
            trim: true
        },
        mobile: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        imageUrl: {
            type: String
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        description: {
            type: String,
            trim: true
        },
        role: {
            type: String,
            required: true,
            default: "user",
            enum: ["user", "admin"]
        },
        followings: [{ type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }],
        // notifications: [
        //     {
        //         message: String,
        //         data: { type: Date, default: Date.now },
        //         postId: { type: Schema.Types.ObjectId, ref: "Post", required: true },
        //         userId: { type: Schema.Types.ObjectId, ref: "User", required: true }
        //     }
        // ],
        // readNotification: { type: Boolean, default: true },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);
