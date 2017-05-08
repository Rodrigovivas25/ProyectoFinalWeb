var providerGitHub = new firebase.auth.GithubAuthProvider();

providerGitHub.addScope('repo');

var authService = firebase.auth();

document.getElementById('btnGit').addEventListener('click', function()
	{
		authService.signInWithPopup(providerGitHub)
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
