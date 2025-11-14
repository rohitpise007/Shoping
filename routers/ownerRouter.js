const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user-model"); // adjust the path if needed

const router = express.Router();

router.get("/", (req, res)=> { res.send("working");});

module.exports = router;
