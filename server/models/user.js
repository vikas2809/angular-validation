var mongoose = require('mongoose');

var user_schema=mongoose.Schema;
var userSchema=new user_schema({
    firstName: {type:String},
    lastName: {type:String},
    password: {type:String},
    email: { type: String, unique: true},
    role: {type: String},
    address: {type: String},
    city: {type: String},
    state: {type: String},
    pincode: {type: Number},
    designation: {type: String},
    phone_number: {type: Number, unique: true},
    created_at: { type: Date, default: Date.now() },
    // updated_at: { type: Date}
    updated_at: { type: String}
});

//creating the collection with the defined schema
var User = mongoose.model('user',userSchema);

module.exports=User;