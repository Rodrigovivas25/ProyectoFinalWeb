var providerG = new firebase.auth.GoogleAuthProvider();
providerG.addScope('https://www.googleapis.com/auth/plus.login');

document.getElementById("btnGoogle").addEventListener("click", myFunction);

function myFunction() {
firebase.auth().signInWithPopup(providerG).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;

  $('#modalLogin').modal('open');
  document.getElementById("loginHola").innerHTML = "Has iniciado sesión como: <b><u>" + user.displayName + "</u></b>";

  //  document.log("Hola ",user);




  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
}); 
}