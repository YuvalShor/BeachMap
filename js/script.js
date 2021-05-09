firebase.auth().onAuthStateChanged(function(user) {
	var user = firebase.auth().currentUser;
	var loggedinButtons = document.getElementsByClassName("loggedinButtons");
	
	if (user) {
		// User is signed in.
		document.getElementById("adminLogin").style.display = "none";
	  
		for (var i = 0; i < loggedinButtons.length; i++) {
			loggedinButtons[i].style.display = "block";
		}
	  
		document.getElementById("loggedInEmail").style.display = "block";
		document.getElementById("loggedInEmail").innerHTML = "<i class='fas fa-user'></i> Logged in as: <b>" + user.email + "</b>";
	} else {
		// No user is signed in.
		document.getElementById("adminLogin").style.display = "block";
		
		for (var i = 0; i < loggedinButtons.length; i++) {
			loggedinButtons[i].style.display = "none";
		}
		
		document.getElementById("loggedInEmail").style.display = "none";
		document.getElementById("loggedInEmail").innerText = "";
	}
});

function login() {
	var userEmail = document.getElementById("emailInput").value;
	var userPassword = document.getElementById("passwordInput").value;
  
	firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
		.then((userCredential) => {
		// Signed in
		var user = userCredential.user;
		$('#adminPage').attr('src', "admin.html");
		})
		.catch((error) => {
			var errorCode = error.code;
			var errorMessage = error.message;
	
			window.alert("Error " + errorCode + ": " + errorMessage);
	});
}

function logout() {
	firebase.auth().signOut().then(() => {
	  // Sign-out successful.
		}).catch((error) => {
	  // An error happened.
	});

	$('.about').addClass('hide');
	$('#aboutlabel').removeClass('active');
	$('#homelabel').addClass('active');
	$('.gisapplet').removeClass('hide');
	$('#adminlabel').removeClass('active');
	$('.admin').addClass('hide');
	$('#adminPage').attr('src', "#");
}

function forgotPassword() {
	var auth = firebase.auth();
	var emailAddress = document.getElementById("emailInput").value;
	
	auth.sendPasswordResetEmail(emailAddress).then(function() {
	  // Email sent.
	  window.alert("Email sent to: " + emailAddress + ". Follow the directions in the email message to reset your password.");
		}).catch(function(error) {
	  // An error happened.
	  if (emailAddress == "") {
		  window.alert("No email entered");
	  }
	  else {
		var errorCode = error.code;
		var errorMessage = error.message;

		window.alert("Error " + errorCode + ": " + errorMessage);
	  }
	  
	});
}