const expressAsyncHandler = require("express-async-handler");
const Quotes = require("../models/qoutes.model");


const getAllQuotes=expressAsyncHandler(async(req,res)=>{
    try{

        let {limit}=req.query;
        limit=parseInt(req.query) || 20;
        const quotes= await Quotes.find({getAttributes:['id','author','category','content'],limit});
        
        res.status(200).json({quotes});
    }
    catch(error){
res.status(500).json({
    error,message:'an error occurred '
})
    }
});
const getRandomQuotes=expressAsyncHandler(async(req,res)=>{
    try{

        
    const limit=1;

    // get the record count of quotes from the database
    const {record_count}=await Quotes.describeModel();

    // generate a random index to be used as offset
    const randomIndex=Math.floor((Math.random() * record_count) ) || 0;
    const offset=randomIndex;

        const quotes= await Quotes.find({getAttributes:['id','author','category','content'],limit,offset});
        // send only one quote
        res.status(200).json(quotes[0]);
    }
    catch(error){
res.status(500).json({
    error,message:'an error occurred '
})
    }
});


const createNewQuote=expressAsyncHandler(async(req,res)=>{
    try{
           const {author,content,category}=req.body;
           if(!req.body){
               return res.status(400).json({
                   message:'no quote to create,body is empty'
               })
           }
      const {inserted_hashes}=  await Quotes.create({author,content,category});
res.status(201).json({
    message:'successfully added new quote with id '+inserted_hashes[0]
});
    }
    catch(error){
        res.status(500).json({
            error,
            message:'an error occured, couldn\'t create quote'
        })
    }
});

const editQuote=expressAsyncHandler(async(req,res)=>{
    try{

        const {quote_id}=req.params;
const quote=await Quotes.findOne({id:quote_id});
if(!quote) {
    return res.status(404).json({
        message:`quote with id '${quote_id}' was not found`
    })
}
const quoteToUpdate=req.body|| {};
quoteToUpdate['id']=quote_id;
await Quotes.update(quoteToUpdate);

res.status(200).json({
    message:'successfully updated quote with id '+quote_id
})
}
catch(error){
    res.status(500).json({
        error,message:'an error occurred, couldn\'t update quote '
    })
}
});

const deleteQuote=expressAsyncHandler(async(req,res)=>{
    try{

        const {quote_id}=req.params;
        if(!quote_id){
    return res.status(400).json({message:'please provide an id'});
}
const quote=await Quotes.findOne({id:quote_id});
if(!quote) {
    return res.status(404).josn({
        message:`quote with id '${quote_id}' was not found`
    })
}

await Quotes.findByIdAndRemove([quote_id]);

res.status(200).json({
    message:'successfully deleted quote with id '+quote_id
})

    }
    catch(error){
        res.status(500).json({
            message:'an error occured, couldn\'t delete quote'
        })
    }
})

const getQuotesByAuthor=expressAsyncHandler(async(req,res)=>{
    try{
const {author}=req.params;
        let {limit}=req.query;
        limit=parseInt(req.query) || 20;
        const quotes= await Quotes.find({getAttributes:['id','author','category','content'],limit,where:author ?`author='${author}'`:null});
        
        res.status(200).json({quotes});
    }
    catch(error){
res.status(500).json({
    error,message:'an error occurred '
})
    }
});
const getQuotesByCategory=expressAsyncHandler(async(req,res)=>{
    try{
const {category}=req.params;
        let {limit}=req.query;
        limit=parseInt(req.query) || 20;
        const quotes= await Quotes.find({getAttributes:['id','author','category','content'],limit,where:category ?`category='${category}'`:null});
        
        res.status(200).json({quotes});
    }
    catch(error){
res.status(500).json({
    error,message:'an error occurred '
})
    }
});



module.exports={
    getAllQuotes,
    createNewQuote,
    editQuote,
    deleteQuote,
    getQuotesByAuthor,
    getQuotesByCategory,
    getRandomQuotes
}