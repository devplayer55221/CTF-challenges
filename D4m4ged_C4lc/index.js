const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
const path = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/js",express.static(path.join(__dirname,'resources')));
app.use("/css",express.static(path.join(__dirname,'resources')));

app.get("/", (req,res) => {
	res.sendFile(__dirname + "/resources" +"/page.html");
});

app.post("/page1", (req,res) => {
	console.log("req body = ", req.body);
	console.log("got the request");
	res.send("error 1-> SEFDU0VD");
})

app.post("/page2", (req,res) => {
	console.log("req body = ", req.body);
	console.log("got the request");
	res.send("error 2-> e2M0bGNfM");
})

app.post("/page3", (req,res) => {
	console.log("req body = ", req.body);
	console.log("got the request");
	res.send("error 3-> ypQbDBp");
})

app.post("/page4", (req,res) => {
	console.log("req body = ", req.body);
	console.log("got the request");
	res.send("error 4-> dDNkfQ==");
})

app.listen(5000, () => {
	console.log("Server running on port 5000");
})