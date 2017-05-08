
var providerFB = new firebase.auth.FacebookAuthProvider();

providerFB.addScope('user_friends');

var authService = firebase.auth();

document.getElementById('btnFacebook').addEventListener('click', function()
	{
		authService.signInWithPopup(providerFB)
			.then(function(result)
			{
				$('#modalLogin').modal('open');
				document.getElementById("loginHola").innerHTML = "Has iniciado sesión como: <b><u>" + result.user.displayName + "</u></b>";
				// console.log('Autenticado usuario ', result.user.displayName);
			})
			.catch(function(error)
			{
				console.log('Detectado un error: ', error);
			});
	});