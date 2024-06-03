const { Router } = require('express');
const { home, addMovie, updateMovie, deleteMovie, add_movie, edit_movie } = require('../controllers/movie.controller');
const multer = require('multer');

const router = Router();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/img")
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const uploadImg = multer({ storage: storage }).single("image")

router.get("/", home);
router.get("/add_movie", add_movie);
router.get("/update_Movie", edit_movie);
router.get("/deleteMovie", deleteMovie);

router.post("/addMovie", uploadImg, addMovie)
router.post("/updateMovie", uploadImg, updateMovie)


module.exports = router