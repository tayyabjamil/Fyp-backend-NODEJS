const mongoose = require("mongoose")

 var Post = mongoose.model('Post',{

    title:{
           type:String,
    },
    content:{
        type:String,     
    },
    comment:
        [
      {
    type:mongoose.Schema.Types.ObjectId,
    ref:"Comment",
    required:"comment is required"
      }
        ]
  });
module.exports = {Post};