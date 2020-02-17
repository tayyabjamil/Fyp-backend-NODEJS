const express = require('express');
var router = express.Router();
var { Project } = require('../models/project');
const mongoose = require('mongoose')


router.post('/',(req,res)=>{
    var  projectData = new Project({
    
        title:     req.body.title,
        type:    req.body.type,
        estimateAmount: req.body.estimateAmount,  
        description: req.body.description,

    })
    projectData.save((err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log("Error in project data creation"+JSON.stringify(err,undefined, 2))}
    });
})


router.get('/',(req,res)=>{
    Project.find((err,docs)=>{
        if (!err){
            res.send(docs);
        }
        else{
            console.log("Error in Retriving Teachers:"+JSON.stringify(err,undefined, 2));
        }
            
        });
    })
module.exports = router;
