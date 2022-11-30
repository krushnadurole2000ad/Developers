const express = require('express');
const Router = express.Router();
const fetchuser = require('../Middleware/fetchuser');
const { body, validationResult } = require('express-validator')
const Element = require("../Models/DevProfile")
const User = require('../Models/User')
const app = express();

// Route 1 : get all the developers profile
Router.get('/getalldevelopers', fetchuser, async (req, res) => {
    try {
        const elements = await Element.find()
        res.json(elements);
    } catch (error) {
        res.status(401).send("Something went wrong");
    }
})



// Router 2 : add the developer profile. 
Router.post('/adddevelopers', fetchuser, async (req, res) => {

    try {
        const { name, email, role, contactNum, description, github, linkedin } = req.body;

        // If there are errors, return Bad request and the errors
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     return res.status(400).json({ errors: errors.array() });
        // }
        const element = new Element({
            name, email, role, contactNum, description, github, linkedin, user: req.user.id
        })
        const savedelement = await element.save()

        res.json(savedelement)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ------------------------------------------------------
// Route3 :  get the Developer profiles of the logged in user.
Router.get('/fetchuserprofile', fetchuser, async (req, res) => {
    try {
        const mydevprofile = await Element.find({ user: req.user.id });
        // console.log(mydevprofile);
        res.json(mydevprofile);
    } catch (error) {
        res.status(401).send("Something went Wrong")
    }
})


//Route 4 :  update the profile . 
Router.put('/updateprofile/:id', fetchuser, async (req, res) => {
    const { name, email, role, contactNum, description, github, linkedin, resumelink, achievements, date } = req.body;
    // create a new developer object. 
    try {
        const newdev = {};
        if (name) { newdev.name = name };
        if (email) { newdev.email = email }
        if (role) { newdev.role = role };
        if (contactNum) { newdev.contactNum = contactNum }
        if (description) { newdev.description = description };
        if (github) { newdev.github = github };
        if (linkedin) { newdev.github = github };
        if (resumelink) { newdev.resumelink = resumelink };
        if (achievements) { newdev.achievements = achievements };
        if (date) { newdev.date = date };

        // update the developer. 
        let developer = await Element.findById(req.params.id);
        if (!developer) {
            return res.status(400).send("Not Found");
        }
        if (developer.user.toString() != req.user.id) {
            return res.status(401).send("Not allowed");
        }
        developer = await Element.findByIdAndUpdate(req.params.id, { $set: newdev }, { new: true });
        res.json({ developer });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }


})


// Route 5 : 
// router delete an existing developer using DELETE: api/dev/delete/:id
Router.delete('/delete/:id', fetchuser, async (req, res) => {
    try {
        let deve = await Element.findById(req.params.id);
        console.log("Got it 1")
        if (!deve) {
            // 400 shows bad status like not found
            return res.status(404).send("Not Found");
        }
        // if (deve.user.toString() !== req.user.id) {
        //     // 401 is for unauthorized error.
        //     return res.status(401).send("Not Allowed to Delete !");
        // }
        deve = await Element.findByIdAndDelete(req.params.id);
        res.json({ success: "Successfully deleted the developer" });
    } catch (error) {
        res.status(400).send("something went wrong");
    }
})
module.exports = Router;