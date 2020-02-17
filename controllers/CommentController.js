const express = require('express');

var router = express.Router();

var { Comment } = require('../models/Comment');

router.post('/',(req,res)=>{
      var comm = new Comment({
        content:req.body.content
          });
          
        comm.save((err,doc)=>{
            if(!err){res.send(doc);}
            else{console.log("Error in Employee data creating"+JSON.stringify(err,undefined, 2))}
        });
      
})
router.get('/',(req,res)=>{
  Comment.find((err,docs)=>{
      if (!err){
          res.send(docs);
      }
      else{
          console.log("Error in Retriving Comments:"+JSON.stringify(err,undefined, 2));
      }
          
      });
  })


module.exports = router;
