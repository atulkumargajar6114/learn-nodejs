const express=require('express');
const app=express();
const db=require('./db');
require('dotenv').config();
const PORT=process.env.PORT ||3000;
const bodyParser=require('body-parser')
app.use(bodyParser.json());



app.get("/",function(req,res){
  res.send('Welcome to my hotel!!');
})

// app.post('/person',(req,res)=>{
//   const data=req.body;
//   const newPerson=new Person(data);
//   // newPerson.name=data.name;
//   // newPerson.age=data.age;
//   // newPerson.mobile=data.mobile;
//   // newPerson.email=data.email;
//   // newPerson.address=data.address;
//   newPerson.save((error,savedPerson)=>{
//     if(error){
//       console.log('Error saving person:',error);
//       res.status(500).json({error:'Internal server error'});
//     }else{
//       console.log('data save successfully');
//       res.status(200).json(savedPerson);
//     }
//   })
// })





//Routing
const personRoutes=require('./routes/personRoutes');
app.use('/person',personRoutes);

const menuItemRoutes=require('./routes/menuItemRoutes');
app.use('/menu',menuItemRoutes);



app.listen(PORT,()=>{
  console.log('server is listening on port 3000');
})