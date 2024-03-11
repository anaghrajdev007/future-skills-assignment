const mongoose = require('mongoose');

const endUserSchema = mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    pin:{
        type:String,
        required:true
    },
    DOB:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    profession:{
        type:String,
        required:true
    },
    wheredidyouhearus:{
        type:String,
        required:true
    }
},
{
    timestamps:true
}
);

module.exports=mongoose.model("Enduser", endUserSchema);