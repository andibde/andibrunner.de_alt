/* ======================================================================
  Author Custom JavaScript
====================================================================== */
// Loop through Array of Objects
var objPeople = [
	{ // Object @ 0 index
		password: "1234"
	}

]

function getInfo() {
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(password == objPeople[i].password) {
			window.location = "https://calc-andi.netlify.com/"
			// stop the function if this is found to be true
			return
		}
	}
	alert('Password incorrect!');
}