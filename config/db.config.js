const {createConnection}= require('harpee');

const dbconfig={
    host:process.env.DB_HOST,
    username:process.env.DB_USER,
    password:process.env.DB_PASS
}
const connectDB=()=> createConnection(dbconfig);
module.exports={
    connectDB
}