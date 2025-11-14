const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user-model"); // adjust the path if needed

const router = express.Router();

router.get('/',(req, res)=>
    {console.log("working");

})

console.log("owner router file loaded. NODE_ENV =", process.env.NODE_ENV);

router.post("/create", (req, res)=>{


if(process.env.NODE_ENV === "development"){
   console.log("heyyyy");
}
});
module.exports = router;
 