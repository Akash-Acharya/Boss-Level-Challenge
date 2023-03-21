const express = require("express");
const app = express();

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

var items = ["Cook","Eat","Sleep"]
var work_items = []

app.use(express.static("public"))

app.get("/", function (req, res) {
  var today = new Date();
  var options = {
    weekday: "long",
    // year: "numeric",
    month: "long",
    day: "numeric",
  };

  var day = today.toLocaleDateString("en-US",options)
  // res.send("port number 6000 open")
  res.render("list",{list_titles: day, add_lists: items});
});

app.post("/",function(req,res){
   var item = req.body.add_list

   if(req.body.b1 === "Work"){
    work_items.push(item)
    res.redirect("/work")
    console.log("Hyy i am in...")
   }else{
    items.push(item)
    res.redirect("/")
    console.log("Hyy i am out...")
   }

})

app.get("/work", function(req,res){
  res.render("list",{list_titles: "Work List", add_lists: work_items});
})

app.listen("7000", function () {
  console.log("Port number 7000 open...");
});
