const mongoose=require('mongoose');
require('dotenv').config();
// const mongoURL_Local=process.env.MongoDB_URL_Local;
const mongoURL=process.env.DB_URL;
mongoose.connect(mongoURL);

const db=mongoose.connection;
db.on('connected',()=>{
  console.log('Connected to mongodb Server');
})
db.on('error',(err)=>{
  console.log('MongoDB Connection error:',err);
})
db.on('disconnected',()=>{
  console.log('MongoDB disconnected');
})
module.exports=db;