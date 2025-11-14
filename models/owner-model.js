const mongoose = require ("mongoose");

const ownerSchema = mongoose.Schema({
    fullname:{
        type:String,
        minlength:3,
        trim:true,
    },
    email: String,
    password :String,
    product:{
        type:String,
        default:[],
    },
    contact:Number,
    picture: String,
    picture: String,
    gstin :String,

});
module.exports = mongoose.model("owner",ownerSchema);