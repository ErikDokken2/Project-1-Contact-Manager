const urlBase = 'http://www.urimus3600.xyz/api';
const extension = 'php';

let error = "";
let userId = "";
let password = "";
let repeatPassword = "";

// When the enter button was pressed, jump to the doRegister function
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        doRegister;
    }
});

function doRegister()
{
  	error = "";

  	// These variables must match the "id" part in the html
  	userId = document.getElementById("userId").value;
	let password = document.getElementById("password").value;
  	let repeatPassword = document.getElementById("repeatPassword").value;

  	document.getElementById("registerResult").innerHTML="";

  	// Checks if there are any fields that are left empty
  	if ((userId == "") || (password == "") || (repeatPassword == "")) {
          document.getElementById("registerResult").innerHTML = "All fields required";
  		document.getElementById("registerResult").style.color = '#E02745';
          return;
      }

  	// Check if the passwords match
  	if (password != repeatPassword) {
  		document.getElementById("registerResult").innerHTML = "Passwords do not match.";
  		document.getElementById("registerResult").style.color = '#E02745';
  		return;
  	}
	
	// Check if userId length greater than 9 characters
	if (userId.length < 10) {
		document.getElementById("registerResult").innerHTML = "User name must be 10 characters or more.";
		document.getElementById("registerResult").style.color = '#E02745';
		return;
	}
	
	// Check if password length greater than 7 characters
	if (password.length < 8) {
		document.getElementById("registerResult").innerHTML = "Password must be 8 characters or more.";
		document.getElementById("registerResult").style.color = '#E02745';
		return;
	}
	
	
	

  	let tmp = {firstName:firstName, lastName:lastName, userId:userId, email:email, password: password};

  	let jsonPayload = JSON.stringify(tmp);

  	// Path for the php file, the path name should be changed with every api endpoints
  	let url = urlBase + '/register.' + extension;

  	let xhr = new XMLHttpRequest();
  	xhr.open("POST", url, true);
  	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  	try
  	{
  		xhr.onreadystatechange = function()
  		{
  			// Registered succesfully
  			if (this.readyState == 4 && this.status == 200)
  			{
  				let jsonObject= JSON.parse( xhr.responseText);
  				error = jsonObject.error;

  				if (error != ""){
  					document.getElementById("registerResult").innerHTML = error;
  					document.getElementById("registerResult").style.color = '#E02745';

  					return;
  				}

  				document.getElementById("registerResult").innerHTML = "Successfully registered, redirecting to login page.";
  				document.getElementById("registerResult").style.color = 'green';

  				// Clear all the fields
				document.getElementById("userId").value = "";
  				document.getElementById("password").value = "";
  				document.getElementById("repeatPassword").value = "";

				// Wait for 2 seconds to show the "Successfully registered" message then redirect to the login page
				window.setTimeout(function (){window.location.href = "index.html";}, 10000);

  			}

  		};
  		xhr.send(jsonPayload);
  	}
  	// Register not successful
  	catch(err)
  	{
  		document.getElementById("registerResult").innerHTML= err.message;
  		document.getElementById("registerResult").style.color = '#E02745';
  	}

}