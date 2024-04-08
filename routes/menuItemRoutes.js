const express=require('express');
const router=express.Router();
const MenuItem=require('./../Models/MenuItem');

//MenuItem apis
router.post('/',async (req,res)=>{
  try{
    const data=req.body;
    const menuItem=new MenuItem(data);
    const savedMenu=await menuItem.save();
    console.log('menu saved');
    res.status(200).json(savedMenu);
  }catch(error){
    console.log(error);
    res.status(500).json({error:'Internal server error'});
  }
})

router.get('/',async (req,res)=>{
  try{
    const data=await MenuItem.find();
    console.log('Fetched Menu');
    res.status(200).json(data);
  }catch(error){
    console.log(error);
    res.status(500).json({error:'Internal server error'});
  }
})

module.exports=router;