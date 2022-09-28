const mongoose=require('mongoose');
const dotnev = require('dotenv')
dotnev.config({path:"Config/config.env"})
const connectToMongo = ()=>{
    mongoose.connect(process.env.DATABASE_URL ,{
        useNewUrlParser:true,
        useUnifiedTopology :true
    }).then(con=>{
        console.log(`mognodb Database connected with Host:${con.connection.host}`)
    })
}
// const index = require('../server/index')
module.exports = connectToMongo