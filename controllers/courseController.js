const express = require('express');
var router = express.Router();

var {Course} = require('../models/course')
var {Teacher}= require('../models/teacher')
router.post('/',(req,res)=>{
    var courseData = new Course({
    
        subject:     req.body.subject,
        duration:    req.body.duration,
        modules: req.body.modules,  
        
    })
    courseData.save((err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log("Error in Teacher Course data creating"+JSON.stringify(err,undefined, 2))}
    });
})

router.get('/',(req,res)=>{
    Course.find((err,docs)=>{
        if (!err){
            res.send(docs);
        }
        else{
            console.log("Error in Retriving teacher courses:"+JSON.stringify(err,undefined, 2));
        }
            
        });
    })


    module.exports = router;
