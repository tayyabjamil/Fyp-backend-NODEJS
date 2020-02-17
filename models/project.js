const mongoose = require('mongoose');
var Project = mongoose.model('project',{
    
    title:     { type: String},
    type:{type:String},
    estimateAmount:{type:String},
    description: {type: String},
});

module.exports = {Project};