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


// router 2 : get the all the requirements : 
router.get('/getallrequire', fetchuser, async (req, res) => {
    try {
        const requirements = await Element.find();
        res.json(requirements);
    } catch (error) {
        res.status(401).send("Something went wrong");
    }
})
// route1 : to create a requirements : add a requirements 
// using post api : "/api/v1/addrequire"
router.post('/addrequire', [
    body('title', 'Enter the suitable title').isEmpty(),
    body('technologies', 'Enter the technologies required '),
    body('description', 'Enter the description '),
    body('email', 'Enter the valid email').isEmail()
], async (req, res) => {
    let success = 0;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        success = false;
        return res.status(400).json({ success, errors: errors.array() });
    }
    try {
        const { postedby, Title, Technologies, description, deadline, email, contactNum } = req.body;

        const requirement = new Require({
            postedby, Title, Technologies, description, deadline, email, contactNum
        })
        const savedrequirement = await requirement.save();
        res.json(savedrequirement);
    } catch (error) {
        console.log(errors.message);
        res.status(500).json("Internal Server Error");
    }
})


// route to fetch the requirements 
router.get('/fetchrequire', fetchuser, async (req, res) => {
    try {
        const userrequire = await Require.find({ postedby: req.user.id });
        res.json(userrequire);
    } catch (error) {
        res.status(401).send("something went wrong");
    }
})

// route to update the requirements uploaded by the user. 
router.put('/update/:id', fetchuser, async (req, res) => {
    const { postedby, Title, Technologies, description, deadline, email, contactNum } = req.body;

    // create a new developer object. 
    const newrequire = {};
    if (postedby) { newrequire.postedby = postedby };
    if (Title) { newrequire.Title = Title }
    if (Technologies) { newrequire.Technologies = Technologies }
    if (description) { newrequire.description = description }
    if (deadline) { newrequire.deadline = deadline }
    if (email) { newrequire.email = email }
    if (contactNum) { newrequire.contactNum = contactNum };

    // update the requirements. 
    let requirement = Element.find(req.params.id);

    if (!requirement) {
        return res.status(400).send("Not Found");
    }
    if (Element.postedby.toString() != req.user.id) {
        return res.status(401).send("Not allowed");
    }
    requirement = await Element.findByIdAndUpdate(req.params.id, { $set: newdev }, { new: true })
    res.json(requirement);
})


// route 
// route delete an existing requirements using DELETE api/req/delete/:id
router.delete('/delete/:id', fetchuser, async (req, res) => {
    try {
        let require = await Element.findById(req.params.id);
        if (!require) {
            return res.status(400).send("Not found");
        }
        if (require.postedby.toString() != req.user.id) {
            return res.status(401).send("Not allowed to delete!");
        }
        require = await Element.findByIdAndDelete(req.params.id);
        res.json(400).send("Successfully deleted the developer");
    } catch (error) {
        res.status(400).send("something went wrong");
    }
})

router.get('/getmyreq',async (req,res)=>{
    try {
        const requirements = await Element.find({postedby:req.user.id});
        res.json(requirements);
    } catch (error) {
        res.status(401).send("Something went wrong");
    }

})

module.exports = router;