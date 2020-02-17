const mongoose = require('mongoose');

var Course = mongoose.model('courseTeacher',{

    subject:{type:String},
    duration:{type:String},
    modules:{type:String},
    teacher:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Teacher',
  }
  })
module.exports = {Course};