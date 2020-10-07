module.exports = app => {
	const home = require("../controller/homecontroller.js");

	app.post("/", home.postmethod);
}