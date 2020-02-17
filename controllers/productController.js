const express =require('express')
const mongoose=require('mongoose');
var router = express.Router();
const multer = require('multer');
const Product = require('../models/Product');
var ObjectId = require('mongoose').Types.ObjectId;

const storage = multer.diskStorage({
    destination:function(req,file,cb){
      console.log("Hello Umesh");
        cb(null,'./public/uploads/');  
    },
    filename:function(req,file,cb){  
     cb(null,file.originalname);   
    }  
});  
  const upload = multer({storage:storage})
    // limits:{
    //     fileSize:1024*1024*5
    // },
    // fileFilter:fileFilter 
    // })
//   const upload= multer({dest:'uploads/'})
// const fileFilter= (req,file,cb)=>{
//     if(file.mimetype==='image/png'){
//         cb(null,true)
//     }else{
//         cb(null,false);
//     }
// }

// router.post('/',upload.single('productImages',5),(req,res,next)=>{
//     const products = new Product({        
//   _id:new mongoose.Types.ObjectId(),
//   name:req.body.name,
//   price:req.body.price,
//   productImages:req.file.path
//     });
//     products.save().then(result=>{
//         console.log(result);
//     }).catch(err=>console.log(err));
//     res.status(201).json({
//         message:"handling post requests / prodcuts",
//         createdProduct:products
//     })

// })

router.post('/',upload.single('productImage'),(req,res,next)=>{
    const product = new Product({        
        _id:new mongoose.Types.ObjectId(),
  name:req.body.name,
  price:req.body.price,
  productImage:req.file.path
    });
    product.save().then(result=>{
        console.log(result);
    }).catch(err=>console.log(err));   
    res.status(201).json({
        message:"handling post requests / prodcuts",
        createdProduct:product
    })
})   

router.get('/:id',(req,res,next)=>{
    Product.find()
    .select("name price _id productImage")
    .exec()
    .then( doc=> {
        console.log(doc);
        if(doc){
            res.status(200).json({
                product:doc,
        
                request:{
                    type:"GET",
                    url:"http/://localhost:3000/product"
                }
            })
        }
                         }

    )
    })

  
// router.get('/',(req,res)=>{
//     Product.find((err,doc)=>{

//         if (!err){
//             res.send(doc);
//         }
//         else{
//             console.log("Error in Retriving Students:"+JSON.stringify(err,undefined, 2));
//         }
            
//         });
//     })
// router.get('/:id',(req,res)=>{
//     if(!ObjectId.isValid(req.params.id))
//     return res.status(400).send('NO record with given id : ${req.params.id}');
//     Product.findById(req.params.id,(err,doc)=>{
//         if (!err){
//             res.send(doc.productImage);  
//         }
//         else{
//             console.log("Error in Retriving Students:"+JSON.stringify(err,undefined, 2));
//         }
            
//         })
   
// });
  
    
// router.get('/',(req,res,next)=>{
//     Product.find()
//     .select('_id name price')
//     .exec()
//     .then(docs =>{ 
//     const res={
//         product:docs
//     };   

//     console.log(res)
// })
// res.status(200).json(res);
  
// })
           

var mkdirp = require('mkdirp');


module.exports=router;
