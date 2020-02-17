const express = require('express');
const app=express();
var cors = require('cors');
app.use(cors());


const bodyParser = require('body-parser')
var EmployeeController = require('./controllers/EmployeeController.js');
var studentController = require('./controllers/studentController.js');
var CommentController = require('./controllers/CommentController.js');
var PostController = require('./controllers/PostController.js');
var teacherController = require('./controllers/teacherController.js');
var queryStudentController = require('./controllers/queryStudentController.js');
var courseController = require('./controllers/courseController.js');
var productController = require('./controllers/productController.js');
var userAccountConroller = require('./controllers/userAccountController.js');
var projectConroller = require('./controllers/projectController.js');


// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

// app.use((req,res,next)=>{
//         res.status(200).json({
//             message:"it works"
//         })
// })
// app.get('/products', (req, res, next) => {
//     res.json({msg: 'This is CORS-enabled for all origins!'})
//   })
  

app.use(express.static('uploads'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use('/employee', EmployeeController);
app.use('/student', studentController);
app.use('/comment', CommentController);
app.use('/post', PostController);
app.use('/teacher', teacherController);
app.use('/queryStudent', queryStudentController);
app.use('/course', courseController);
app.use('/product', productController);
app.use('/upload', productController);
app.use('/userAccount', userAccountConroller);
app.use('/project', projectConroller);

module.exports = app;