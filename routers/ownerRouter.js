const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user-model"); // adjust the path if needed

const router = express.Router();

router.post("/", async function (req, res) {
  try {
    const { email, password, fullname } = req.body;

    // Generate salt and hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user with hashed password
    const user = await userModel.create({
      email,
      password: hashedPassword,
      fullname,
    });

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, "yourSecretKey", {
      expiresIn: "1h",
    });

    // Send response
    res.status(201).json({
      message: "User created successfully",
      user,
      token,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
