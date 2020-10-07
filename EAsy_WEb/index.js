const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const path = require("path");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/js", express.static(path.join(__dirname, '/resources/templates/js')));

app.get("/", (req,res) => {
	res.sendFile( __dirname + "/resources/templates/html/" + "homepage.html");
});

app.get("/flagfile", (req,res) => {
	res.sendFile( __dirname + "/resources/templates/html/" + "flagfile.html");
})

require("./routes/homeroute.js")(app);

app.listen(process.env.PORT, () => {
	console.log("Server running on port 5000");
});