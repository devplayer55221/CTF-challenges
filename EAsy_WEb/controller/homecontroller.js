exports.postmethod = (req, res) => {
	console.log("req body = ", req.body);
	let user  = req.body.username;
	let pass = req.body.password;
	if(user == "keymaster" && pass == "secretkey") {
		console.log("correct credentials");
		let = "here's your next hint -> syntsvyr";
		res.send(let);
	}
	if(user!="keymaster" || pass!="secretkey")
	{	
		let jsontoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImtleW1hc3RlciIsInBhc3N3b3JkIjoic2VjcmV0a2V5In0.oJOVw-DOUGSNjGDRWe5_kZm3MAFq_Y9YZa0QyXDbvlM";
		res.send("Okay, here is a hint for you -> "+ jsontoken);
	}
};