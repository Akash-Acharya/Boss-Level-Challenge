const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended: true}));

app.get("/",function(req,res){
	// res.send("Hello World...")
	res.sendFile(__dirname+"/index.html")
})

app.post("/",function(req,res){

	var n1 = Number(req.body.num1);
	var n2 = Number(req.body.num2);
	var sum = n1+n2;

	res.send("Sum of two Number is :"+sum);
})

app.listen(4000,function(){
	console.log("port Number 4000 is activated")
});