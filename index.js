const express = require ("express");

const cookieParser = require("cookie-parser");
const path = require("path");
const ownerRouter =require("./routers/ownerRouter");
const userRouter =require("./routers/productRouter");
const productRouter =require("./routers/userRouter");

const db = require("./config/mongoose-connection");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/owner", ownerRouter);
app.use("/product", productRouter);
app.use("/user", userRouter);


app.listen(5000, () => console.log("Server running on port 5000"));
