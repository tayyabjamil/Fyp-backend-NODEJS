const mongoose = require('mongoose');
var Student = mongoose.model('student',{
    name:     { type: String},
    email:{type:String},
    password:{type:String},
    university: {type: String},
    queries:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Query",
    }]
});

module.exports = {Student};