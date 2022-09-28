const Element = require('../Models/Element');
const dotenv = require('dotenv');

const Elements = require('../data/developers.json');
const connectoMongo = require('../db');
// const Element = require('../Models/Element');


// setting dotenv file. 
dotenv.config({path:'server/Config/config.env'});


// connect database
connectoMongo();

// delete all products from db and insert alll
const seedProduct = async(req,res,next)=>{
    try {
        await Element.deleteMany();
        console.log("Products are deleted");
        await Element.insertMany(Elements);
        console.log("All products are inserted");
        process.exit();
    } catch (error) {
        console.log({error:error.message});
        process.exit();
    }   

}
seedProduct();
