const {Schema,Model}=require('harpee');


const QuotesSchema=new Schema({
    name:'QuotesScehma',
    primaryKey:'id',
    fields:{
        author:String,
        category:String,
        content:String
    }});

const Quotes=new Model('quotes',QuotesSchema);

module.exports=Quotes;