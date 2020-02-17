const mongoose = require('mongoose');

var Comment = mongoose.model('Comment',{
    content:{
                type: String,
            },
             post:{
                  type:mongoose.Schema.Types.ObjectId,
                  ref:'Post',
             }
});
  
module.exports = {Comment};