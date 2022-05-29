//remember to initialize
const express = require("express");
const bodyParser = require("body-parser");


const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



app.get("/", function(req,res){
  res.sendFile(__dirname+"/index.html");

});
app.post("/", function(req,res,){
  res.sendFile(__dirname+"/contact.html")
});
app.post("/file", function(req,res){
  res.sendFile(__dirname+"/michael's Resume.pdf")
});
 app.listen(process.env.PORT||3000, function(){
   console.log("server running");
 });
