const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//connection to mongodb server
mongoose.connect("mongodb://localhost:27017/firstmongo");

app.use("/", express.static(path.resolve(__dirname, "assets")));

app.use(bodyParser.json());

app.listen(13371, () => {
    console.log("Server up");
});
