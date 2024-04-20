express = require("express");
const router = express.Router();
const db = require('../db/conn');
const Lesson = require('../models/Lesson');


router.get(('/'), async (req, res) => {
    console.log(`request query is: ${req.query.subject}`);

    try {
        // const foundLessons = await Lesson.find({});
        // res.status(200).json(foundLessons);
        if (req.query.subject) {
            const foundLessons = await Lesson.find({ subject: req.query.subject })
            console.log(req.query.subject);
            console.log(foundLessons)
            res.status(200).json(foundLessons);
        } else {
            const foundLessons = await Lesson.find({});
            res.status(200).json(foundLessons);
        }
        // res.status(200).json(foundLessons);
    } catch (err) {
        res.status(400).send(err);
    }
})


//THIS WILL ONLY BE USEFUL IF WE ADD IN GET BY ID, or something like that
// Custom 404 (not found) middleware.
// Since we place this last, it will only process
// if no other routes have already sent a response!
// We also don't need next(), since this is the
// last stop along the request-response cycle.
router.use((req, res) => {
    res.status(404);
    res.json({ error: "resource not found" });
})

module.exports = router;