// Imports for Image API
const router = require('express').Router();
const { Image } = require('../../models');

// cloudinary and multer imports
const multer = require('multer');
const upload = multer({ dest: "uploads/" });
const cloudinary = require("cloudinary").v2;

// env import
require('dotenv').config();

// POST new image for upload (router.use(/image/upload) as endpoint)
router.post('/create/', upload.single("image"), (req, res) => {
    cloudinary.uploader.upload(req.file.path, (err, result) => {
        if (err) throw err;
        console.log(result);
        Image.create({
            imageName: req.body.fileName,
            imageURL: result.secure_url,
        }).then((imageData) => {
            res.send("complete!");
        });
    });
});

// Export for external
module.exports = router;