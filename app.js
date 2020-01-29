// jshint esversion:6

const express = require("express");
// const bodyParser = require("body-parser");

const app = express();

// app.use("view engine", "ejs");

app.get("/", (req, res) => {
  var today = new Date();
  var currentDay = today.getDay();
  // var day = "";

  if (currentDay === 6 || currentDay === 0) {
    // res.write('<h1>vakantie</h1>');
    // day = "weekend";
    res.sendFile(__dirname + "/weekend.html");
  } else {
    // res.write('<h1>het is niet vakantie</h1>');
    // res.write('<p>werk!</p>');
    // res.send();
    // day = "weekday";
    res.sendFile(__dirname + '/weekday.html');
  }
  // res.render("list", {kindOfDay: day});
  // res.send();
});

app.listen(3000, () => {
  console.log('server started on port 3000.');
});
