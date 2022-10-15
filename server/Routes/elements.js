const express=require('express');
const Router=express.Router();
const {body,validationResult} = require('express-validator')
const Element = require("../Models/Element")
const app = express();
Router.get('/getalldevelopers',async(req,res)=>{
    try {
        const elements=await Element.find()
        res.json(elements);
    } catch (error) {
        res.status(401).send("Something went wrong");
    }
})




Router.post('/adddevelopers', async (req, res) => {

        try {
            const { name, email,role,contactNum,description,github,linkedin } = req.body;

            // If there are errors, return Bad request and the errors
            // const errors = validationResult(req);
            // if (!errors.isEmpty()) {
            //     return res.status(400).json({ errors: errors.array() });
            // }
            const element = new Element({
                name, email,role,contactNum,description,github,linkedin
            })
            const savedelement = await element.save()

            res.json(savedelement)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })


    module.exports = Router;