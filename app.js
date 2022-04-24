//jshint esversion:6


const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")
const favicon = require("serve-favicon")


const app = express();

const items = [];


app.set('view engine', 'ejs');

app.use(favicon(__dirname + "/public/images/favicon.ico"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){

const day = date.getDate();

res.render("list", {listTitle: day, newListItems: items});
});


app.post("/", function(req, res){

  const item = req.body.newItem;
    items.push(item);
    res.redirect("/");
  });


app.post("/del", function(req, res){
 items.splice(req.body.del, 1);
 res.redirect("/");
});


app.listen(3000, function(){
  console.log("Server is running on Port 3000");
});
