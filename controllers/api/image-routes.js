// Imports for Image API
const router = require('express').Router();
const { Image } = require('../../models');

// cloudinary and multer imports
const multer = require('multer');
const upload = multer({ dest: "uploads/" });
const cloudinary = require("cloudinary").v2;

// env import
require('dotenv').config();

// GET all Images (router.use(/images) as endpoint)
router.get('/', (req, res) => {
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

// POST new image for upload (router.use(/images) as endpoint)
router.post('/upload', upload.single("image"), (req, res) => {
    cloudinary.uploader.upload(req.file.path, (err, result) => {
        if (err) throw err;
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