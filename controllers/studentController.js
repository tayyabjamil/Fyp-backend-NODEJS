const express = require('express');

var router = express.Router();
 var ObjectId = require('mongoose').Types.ObjectId;
var { Student } = require('../models/student');
var { Query} = require('../models/queryStudent');

router.post('/:studentId/queryStudent',async(req,res)=>{

    const student = await Student.findOne({_id:req.params.studentId})
  
    const query = new Query();

query.title=req.body.title,
query.type=req.body.type,
query.dueDate=req.body.dueDate,
query.details=req.body.details

query.student=student._id;
await student.save();
 
student.queries.push(student._id);
  await student.save();

res.send(student);

})
router.post('/',(req,res)=>{
    var studentData = new Student({
    
        name:     req.body.name,
        email:    req.body.email,
        password: req.body.password,  
        university: req.body.university,

    })
    studentData.save((err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log("Error in Student data creating"+JSON.stringify(err,undefined, 2))}
    });
})

router.get('/',(req,res)=>{
    Student.find((err,docs)=>{
        if (!err){
            res.send(docs);
        }
        else{
            console.log("Error in Retriving Students:"+JSON.stringify(err,undefined, 2));
        }
            
        });
    })

    router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('NO record with given id : ${req.params.id}');
    Student.findById(req.params.id,(err,doc)=>{
        if (!err){
            res.send(doc);  
        }
        else{
            console.log("Error in Retriving Students:"+JSON.stringify(err,undefined, 2));
        }
            
        })
   
});


module.exports = router;
