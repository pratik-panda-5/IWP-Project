const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/IWP");

app.get('/', (req, res)=>{
    res.send("works.");
});

app.listen(3000, function () {
    console.log("server started!");
  });