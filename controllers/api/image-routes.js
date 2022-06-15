// Imports for Image API
const router = require('express').Router();
const { Image } = require('../../models');

// GET all Images (router.use(/images) as endpoint)
// router.get('/', (req, res) => {
//     Image.findAll()
//         .then((images) => {
//             const plain = images.map((image) => image.get({ plain: true }));
//             console.log(plain);
//             res.render("images", { images: plain });
//         })
//         .catch((err) => {
//             res.send(err);
//         });
// });

// Export for external
module.exports = router;