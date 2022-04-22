require('dotenv').config();
const { connectDB } = require("./db.config");
connectDB();
const Quotes = require("../models/qoutes.model");


async function dbInit(){
    await Quotes.init();
console.log('db initialized')
}
dbInit();
module.exports=dbInit;