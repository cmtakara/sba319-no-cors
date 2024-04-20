const express = require("express");
const router = express.Router();
const db = require('../db/conn');
const User = require('../models/User');

router.get('/', async (req, res) => {
    try {
        const foundUsers = await User.find({});
        res.status(200).json(foundUsers);
    } catch (err) {
        res.status(400).send(err);
    }
})

// this is only in here to keep consistency between sba318 and sba319
//  in the future, we will use the front end to display the list of all users to modify
router.get('/list', async (req, res, next) => {
    // create a response string with a tags where the text is the string below and 
    // the link goes to an individual user form to modify in views
    // with the url as the user information as parameters
    let userText = '';
    let userHref = '';
    let aTag = '';
    let finalHTML = '<h1>users</h1>';
    try {
        const foundUsers = await User.find({});
        foundUsers.forEach((u) => {
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
    } catch (err) {
        res.status(400).send(err);
    }
})

router.get(':/id', async (req, res, next) => {
    try {
        const foundUser = User.findById(req.params.id);
        if (user) res.json(user);
        else next();
    } catch (err) {
        res.status(400).send(err);
    }
})

router.delete('/', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.body.id);
        console.log(deletedUser);
        res.status(200).redirect('/api/users');
    } catch (err) {
        res.status(400).send(err);
    }
})



router.post("/", async (req, res) => {
    if (req.body.fname && req.body.lname && req.body.uname && req.body.role) {
        try {
            const foundUser = await User.find({uname: req.body.uname});
            if (foundUser.length) {
                console.log(foundUser)
                res.status(400).json({ error: "Username Already Taken" });
                return;
            }
            const createdUser = await User.create(req.body);
            console.log(createdUser);
            res.status(201).redirect('/users');
        } catch (err) {
            console.log('in catch')
            res.status(400).send(err);
        }
    } 
    else res.status(400).json({ error: "Insufficient Data" });
})

router.patch('/', async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.body.id,
            req.body,
            { new: true}
        );
        res.status(200).redirect('/api/users');
    }catch (err) {
            res.status(400).send(err);
        }

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