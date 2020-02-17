const mongoose = require('mongoose');
var Teacher = mongoose.model('teacher',{
    name:     { type: String},
    email:{type:String},
    password:{type:String},
    university: {type: String},
    courses: [
  {
type:mongoose.Schema.Types.ObjectId,
ref:"Course"
  }
    ]
});

module.exports = {Teacher};