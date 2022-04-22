const express = require("express");
const { getAllQuotes, getQuotesByAuthor, getQuotesByCategory, createNewQuote, editQuote, deleteQuote, getRandomQuotes } = require("../controllers/quotes.controller");
const cors=require('cors');
const router=express.Router();


router.get('/',cors(),getAllQuotes);
router.get('/author/:author',cors(),getQuotesByAuthor);
router.get('/category/:category',cors(),getQuotesByCategory);
router.get('/random',cors(),getRandomQuotes);
router.post('/create',createNewQuote);
router.put('/:quote_id',editQuote);
router.delete('/:quote_id',deleteQuote);


module.exports=router;