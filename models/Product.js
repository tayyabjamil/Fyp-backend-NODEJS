const mongoose = require("mongoose")

 var productSchema = mongoose.Schema({
_id:mongoose.Schema.Types.ObjectId,
name:String,
price:Number,
productImage:String
  
})
module.exports = mongoose.model('Product',productSchema);