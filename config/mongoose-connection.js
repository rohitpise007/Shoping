const mongoose = require("mongoose");
const config = require("config");
const debug = require("debug")("development:mongoose");

mongoose.connect(config.get("MONGODB_URI"), {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => debug(" MongoDB connected"))
.catch(err => debug( err));

module.exports = mongoose;
