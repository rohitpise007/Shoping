const mongoose = require ("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/ROHIT");

const userSchema = mongoose.Schema({
    fullname:{
        type:String,
        minlength:3,
        trim:true,
    },
    email: String,
    password :String,
    card:{
        type:Array,
        default:[],
    },
    isadmin:Boolean,
    order:{
        type:Array,
        default: ArrayBuffer,
    },
    contact:Number,
    picture: String,
});
module.exports = mongoose.model("user",userSchema);