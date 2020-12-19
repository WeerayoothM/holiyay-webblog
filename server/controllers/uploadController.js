const cloudinary = require("cloudinary");

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

const uploadImage = async (req, res) => {
    try {
        const fileStr = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            folder: "travelblog",
            use_filename: true
        });
        console.log(uploadResponse.url)
        res.status(201).json({ url: uploadResponse.url });
    } catch (err) {
        console.error("error", err);
        res.status(500).json({ err: "Something went wrong" });
    }
};

module.exports = {
    uploadImage,
};