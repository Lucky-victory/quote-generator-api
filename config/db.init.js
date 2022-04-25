require('dotenv').config();
const { connectDB } = require("./db.config");
connectDB();
const Quotes = require("../models/qoutes.model");


async function dbInit(){
    await Quotes.init();
console.log('db initialized');
const response=await Quotes.createMany(
    [
        {
          id: "341c7707-71d1-4135-982c-571bacb2ae12",
          author: "Alexander the Great",
          category: "inspirational",
          content: "There is nothing impossible to they who will try."
        },
        {
          id: "34480dc5-aec4-4631-880c-01df5f5766a0",
          author: "Carol Burnett",
          category: "inspirational",
          content: "When you have a dream, you’ve got to grab it and never let go."
        },
        {
          id: "71734c83-86df-40a2-99d5-c1737155f9a9",
          author: "Albert Einstein",
          category: "motivational",
          content: "We cannot solve problems with the kind of thinking we employed when we came up with them."
        },
        {
          id: "0f28594b-70cf-413a-80a6-f6bf57ebe1b5",
          author: "Mahatma Gandhi",
          category: "motivational",
          content: "Learn as if you will live forever, live like you will die tomorrow."
        },
        {
          id: "7c057b99-40d3-4db0-bab0-f535744d41b0",
          author: "Mark Twain",
          category: "motivational",
          content: "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too."
        },
        {
          id: "493eb6a7-3cf4-45e9-954c-1d03240c22c3",
          author: "Amal Clooney",
          category: "inspirational",
          content: "Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell."
        },
        {
          id: "7c119f85-9219-4afb-ab01-ee24969c2054",
          author: "Michael Altshuler",
          category: "inspirational",
          content: "The bad news is time flies. The good news is you’re the pilot."
        },
        {
          id: "1e165784-473d-4f7d-ab1e-efc5ce940c34",
          author: "steve jobs",
          category: "inspirational",
          content: "Your time is limited, so don’t waste it living someone else’s life"
        },
        {
          id: "366f5a7e-386d-446b-95d1-3167dc3b8615",
          author: "steve jobs",
          category: "inspirational",
          content: "Innovation distinguishes between a leader and a follower."
        },
        {
          id: "ed271b88-2a91-49f3-83c5-b1eab2790878",
          author: "Audrey Hepburn",
          category: "inspirational",
          content: "Nothing is impossible. The word itself says ‘I’m possible!"
        }
      ] 
);
console.log(response)
}
dbInit();
module.exports=dbInit;