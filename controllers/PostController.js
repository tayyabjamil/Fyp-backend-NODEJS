const express = require('express');

const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const mongoose = require('mongoose')

const { Post } = require('../models/Post');
const Comment = mongoose.model("Comment");

router.post('/',(req,res)=>{
      var newPost = new Post({
        title:req.body.title,
        content:req.body.content
          });
          
          newPost.save((err,doc)=>{
            if(!err){res.send(doc);}
            else{console.log("Error in Post data creating"+JSON.stringify(err,undefined, 2))}
        });
      
})

router.get('/',(req,res)=>{
  Post.find((err,docs)=>{
      if (!err){
          res.send(docs);
      }
      else{
          console.log("Error in Retriving Posts:"+JSON.stringify(err,undefined, 2));
      }
          
      });
  })


// router.get('/:PostId/comment',async(req,res)=>{
//     if(!ObjectId.isValid(req.params.id))
//     return res.status(400).send('NO Comments with given id : ${req.params.id}');
//     const post= await Post.findOne({_id:req.params.PostId}).populate(
//         "comment"
//     );
//             res.send(post);  
                   
//         });


router.post('/:postId/comment', async(req,res)=>{
   
    //find post
const post = await Post.findOne({_id:req.params.postId})
// //create comment
const comment = new Comment();
comment.content = req.body.content;
comment.post=post._id;  
await comment.save();

// //associate post with comment
post.comment.push(comment._id);
await post.save();

res.send(post);
})

module.exports = router;
