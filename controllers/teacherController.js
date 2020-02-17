const express = require('express');

var router = express.Router();
 var ObjectId = require('mongoose').Types.ObjectId;
var { Teacher } = require('../models/teacher');
 var { Course } = require('../models/course');
 const mongoose = require('mongoose')


router.post('/',(req,res)=>{
    var teacherData = new Teacher({
    
        name:     req.body.name,
        email:    req.body.email,
        password: req.body.password,  
        university: req.body.university,

     
    })
    teacherData.save((err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log("Error in Teacher data creating"+JSON.stringify(err,undefined, 2))}
    });
})

// router.get("/teacherId/course",async(req,res)=>{
//     const getteacher = await Teacher.find().populate(
//         "courses"
//     );
//     res.send(getteacher);
// })

router.get('/',(req,res)=>{
    Teacher.find((err,docs)=>{
        if (!err){
            res.send(docs);
        }
        else{
            console.log("Error in Retriving Teachers:"+JSON.stringify(err,undefined, 2));
        }
            
        });
    })

    router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('NO record with given id : ${req.params.id}');
    Teacher.findById(req.params.id,(err,doc)=>{
        if (!err){
            res.send(doc);  
        }
        else{
            console.log("Error in Retriving teachers:"+JSON.stringify(err,undefined, 2));
        }
            
        })
   
});


router.post('/:teacherId/course', async(req,res)=>{
   
    //find post
    const teacher = await Teacher.findOne({_id:req.params.teacherId})

// // //create comment
const course = new Course();
course.subject = req.body.subject;
course.duration = req.body.duration;
course.modules = req.body.modules;

course.teacher=teacher._id;  
 await course.save();

// // //associate post with comment
  teacher.courses.push(course._id);
  await teacher.save();

res.send(course);
})
module.exports = router;
