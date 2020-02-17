const mongoose = require('mongoose');

var Query = mongoose.model('queryStudent',{

    title:{type:String},
    type:{type:String},
    dueDate:{type:String},
    details:{type:String},
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student',
   }
})
module.exports = {Query};