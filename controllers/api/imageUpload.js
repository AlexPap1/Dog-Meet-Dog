// Imports for Image API
const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Image, Post, User } = require('../../models');

// cloudinary and multer imports
const multer = require('multer');
const upload = multer({ dest: "uploads/" });
const cloudinary = require("cloudinary").v2;

// env import
require('dotenv').config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// GET all Images (router.use(/images) as endpoint)
router.get('/images/', (req, res) => {
    Image.findAll()
        .then((images) => {
            const plain = images.map((image) => image.get({ plain: true }));
            console.log(plain);
            res.render("images", { images: plain });
        })
        .catch((err) => {
            res.send(err);
        });
});

// POST new image for upload (router.use(/image/upload) as endpoint)
router.post('/create/', upload.single("image"), (req, res) => {
    cloudinary.uploader.upload(req.file.path, (err, result) => {
        if (err) throw err;
        Image.create({
            imageName: req.body.fileName,
            imageURL: result.secure_url,
            user_id: req.session.user_id,
        }).then((imageData) => {
            console.log(res);
            res.send("complete!");
        });
    });
});

// Export for external
module.exports = router;