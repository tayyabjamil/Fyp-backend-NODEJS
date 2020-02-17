const express = require('express');
var router = express.Router();
var { userAccount } = require('../models/userAccount');
const mongoose = require('mongoose')
// const bcyrpt = require('bycrypt');
module.exports = router;


router.post('/',(req,res)=>{
    var userData = new userAccount({
    
        username:     req.body.username,
        email:    req.body.email,
        password: req.body.password,  
     
    })
    userData.save((err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log("Error in Teacher data creating"+JSON.stringify(err,undefined, 2))}
    });
})

router.post('/login',(req,res)=>{
   userAccount.find(
       {email:req.body.email }&&
       {password:req.body.password}
          
    
    ).exec()
   .then(user=>{
       if(user.length<=1){
           return res.status(404).json({
               message:"user not found"
           })
       }else{
        return res.status(200).json({
            message:"user found :login"
        })
    }
})
})       
router.get('/',(req,res)=>{
    userAccount.find((err,docs)=>{
        if (!err){
            res.send(docs);
        }
        else{
            console.log("Error in Retriving userAccounts:"+JSON.stringify(err,undefined, 2));
        }
            
        });
    })


module.exports = router;
