$('#btn').click(function(event) {
	//alert("1");
	// let uname = document.getElementById('user').value;
	// let ppass = document.getElementById('pass').value;
	let uname = $('#user').val()
	let ppass = $('#pass').val()
	//console.log("uname = ",uname, " pass = ", ppass);
	let data  ={
		username: uname,
		password: ppass
	}
	console.log("data = ",data);
	$.post("/", data)
		.done(function(result) {
			document.getElementById('response').innerHTML = result;
			//alert(result);
		})
})