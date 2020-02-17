const mongoose = require('mongoose');
var userAccount = mongoose.model('userAccount',{
    username:  { type: String},
    email:     { type:String},
    password:  { type:String},
})
module.exports = {userAccount};