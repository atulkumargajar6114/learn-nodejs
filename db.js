const mongoose=require('mongoose');
// const mongoURL='mongodb://127.0.0.1:27017/hotels'
const mongoURL='mongodb+srv://atulnitmca:Sanjay9329@cluster0.hemrska.mongodb.net/';
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