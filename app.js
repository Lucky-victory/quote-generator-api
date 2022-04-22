// require dotenv module so we can use environment variables
require('dotenv').config();
const express=require('express');
const morgan = require('morgan');
const { connectDB } = require('./config/db.config');
const app=express();
const createError=require('http-errors');
// check if there's already a port on the environment, otherwise use port 3300;
const port=process.env.PORT ||3300;
// connect to the database
connectDB();
const quotesRouter=require('./routes/quotes.route');

// set up middlewares

// accept JSON 
app.use(express.json())
// accept form
app.use(express.urlencoded({
    extended:false
}));

// log api info
app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.send('hello quotes api')
});
// set up routes
app.use('/quotes',quotesRouter);



app.use((req,res,next)=>{
    return next(createError(404))
})
app.listen(port,()=>{
    console.log(`server listening on port ${port}`)
})
