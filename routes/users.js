const express = require("express");
const router = express.Router();

const users = require("../data/user");

router
    .route("/")
    .get((req, res) => {
        res.json(users);
    }).post((req, res) => {
        if (req.body.fname && req.body.lname && req.body.uname && req.body.role) {
            if (users.find((u) => u.uname == req.body.uname)) {
                res.json({ error: "Username Already Taken" });
                return;
            }

            const user = {
                id: parseInt(users[users.length - 1].id) + 1,
                fname: req.body.fname,
                lname: req.body.lname,
                uname: req.body.uname,
                role: req.body.role,
            };

            users.push(user);
            res.json(users[users.length - 1]);
        } else res.json({ error: "Insufficient Data" });
    })
    .patch((req, res, next) => {
        // with the PATCH request route, we allow the client to make changes to an 
        // existing user in the database
        // PATCH only replaces or updates part of a user
        // PUT also can be used but that updates the entire user
        // console.log('/api/users')
        console.log(`updating user with id: ${req.body.id}`)
        // console.log(req.body);
        // `/users/${u.id}/${u.fname}/${u.lname}/${u.uname}/${u.role}`
        // console.log('need to add functionality to actually modify');
        const user = users.find((u, i) => {
            if (u.id == req.body.id) {
                for (const key in req.body) {
                    users[i][key] = req.body[key];
                }
                return true;
            }
        });
        if (user) res.json(user);
        else next();
        // res.redirect('/users');
    })
    .delete((req, res, next) => {
        // console.log(req.body);
        //    console.log(`deleting user with id: ${req.body.id}`);
        //    console.log('need to add functionality to actually modify');
        // the DELETE request route removes the indicated resources
        const user = users.find((u, i) => {
            if (u.id == req.body.id) {
                users.splice(i, 1);
                return true;
            }
        });
        if (user) res.json(user);
        else next();
        //    res.redirect('/users');
    });



router
    .route('/list')
    .get((req, res, next) => {
        // create a response string with a tags where the text is the string below and 
        // the link goes to an individual user form to modify in views
        // with the url as the user information as parameters
        let userText = '';
        let userHref = '';
        let aTag = ''
        let finalHTML = '<h1>users</h1>'

        users.forEach((u) => {
            console.log(u)
            if (Object.keys(u).length !== 0) {
                userText = `User with id: ${u.id} and name: ${u.fname} ${u.lname} with username: ${u.uname} and role of ${u.role}`;
                console.log(userText);
                userHref = `/users/${u.id}/${u.fname}/${u.lname}/${u.uname}/${u.role}`;
                aTag = `<a href="${userHref}">${userText}</a><br>`;
                finalHTML += aTag;
            } else console.log('no user data')
        })
        // console.log(users)
        res.send(finalHTML);
    })

router
    .route("/:id")
    .get((req, res, next) => {
        const user = users.find((u) => u.id == req.params.id);
        if (user) res.json(user);
        else next();
    })

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