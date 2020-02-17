const express = require('express');
var router = express.Router();

var { Query } = require('../models/queryStudent');

var router = express.Router();
router.post('/',(req,res)=>{
    var query = new Query({
    
        title:   req.body.title,
        type:    req.body.type,
        dueDate: req.body.dueDate,  
        details: req.body.details,

    })
    query.save((err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log("Error in Student posting queries data creating"+JSON.stringify(err,undefined, 2))}
    });
})
router.get('/',(req,res)=>{
    Query.find((err,docs)=>{
        if (!err){
            res.send(docs);
        }
        else{
            console.log("Error in Retriving Students:"+JSON.stringify(err,undefined, 2));
        }
            
        });
    })


module.exports = router;
