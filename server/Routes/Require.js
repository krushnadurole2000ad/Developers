const express = require('express');
const { body, validationResult } = require('express-validator')
const Router = express.Router();
// router file to handle the routes : http request 
// which Will require when we need to handle the frontend 
// from the backend.s
const Require = require('../Models/Requirements')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const fetchuser = require('../Middleware/fetchuser');
const router = require('./auth');
const User = require('../Models/User');

const JWT_SECRET = process.env.JWT_SECRET;


// router 2 : get the all the uploaded requirements : 
router.get('/getallrequire', fetchuser, async (req, res) => {
    try {
        const requirements = await Require.find();
        res.json(requirements);
    } catch (error) {
        res.status(401).send("Something went wrong");
    }
})
// route1 : to create a requirements : add a requirements 
// using post api : "/api/v1/addrequire"
router.post('/addrequire', fetchuser, async (req, res) => {
    try {
        const { Title, Technologies, description, deadline, email, contactNum } = req.body;

        const requirement = new Require({
            Title, Technologies, description, deadline, email, contactNum, user: req.user.id
        })
        const savedrequirement = await requirement.save();
        res.json(savedrequirement);
    } catch (error) {
        console.log(error.message);
        res.status(500).json("Internal Server Error");
    }
})


// route to fetch the requirements upload by logged in user.
router.get('/fetchrequire', fetchuser, async (req, res) => {
    try {
        const userrequire = await Require.find({ postedby: req.user.id });
        res.json(userrequire);
    } catch (error) {
        res.status(401).send("something went wrong");
    }
})

// route to update the requirements uploaded by the user. 
router.put('/updatereq/:id', fetchuser, async (req, res) => {
    const { Title, Technologies, description, deadline, email, contactNum } = req.body;

    // create a new developer object. 
    const newrequire = {};
    if (Title) { newrequire.Title = Title }
    if (Technologies) { newrequire.Technologies = Technologies }
    if (description) { newrequire.description = description }
    if (deadline) { newrequire.deadline = deadline }
    if (email) { newrequire.email = email }
    if (contactNum) { newrequire.contactNum = contactNum };

    // update the requirements. 
    let requirement = await Require.findById(req.params.id);

    if (!requirement) {
        return res.status(400).send("Not Found");
    }
    if (requirement.user.toString() !== req.user.id) {
        return res.status(401).send("Not allowed");
    }
    requirement = await Require.findByIdAndUpdate(req.params.id, { $set: newrequire }, { new: true })
    res.json({ requirement });
})


// route 
// route delete an existing requirements using DELETE api/req/delete/:id
router.delete('/deletereq/:id', fetchuser, async (req, res) => {
    try {
        let require = await Require.findById(req.params.id);
        if (!require) {
            return res.status(400).send("Not found");
        }
        if (require.user.toString() != req.user.id) {
            return res.status(401).send("Not allowed to delete!");
        }
        require = await Require.findByIdAndDelete(req.params.id);
        res.json({ success: "Done deleting" });
    } catch (error) {
        res.status(400).send("something went wrong");
    }
})

router.get('/getmyreq',fetchuser, async (req, res) => {
    try {
        const requirements = await Require.find({ user: req.user.id });
        res.json(requirements);
    } catch (error) {
        res.status(401).send("Something went wrong");
    }

})

module.exports = router;