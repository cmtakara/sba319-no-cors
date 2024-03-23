express = require("express");
const router = express.Router();

const lessons = require('../data/lesson');

router
    .route("/")
    .get((req, res) => {
        if (req.query.subject) {
            console.log(req.query.subject);
            console.log(lessons)
            const subjLessons = lessons.filter((lesson) => lesson.subject == req.query.subject);
            res.json(subjLessons)
        }
        res.json(lessons);
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