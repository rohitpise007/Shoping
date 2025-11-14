const express =require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("hey its working");
    // const { email, password, fullname } = req.body;
});
module.exports =router;