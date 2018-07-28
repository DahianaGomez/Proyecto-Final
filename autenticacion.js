jQuery(document).ready(function($){
	$ ('.login').on(
		'submit',
		function(e){
			e.preventDefault();

			var email = $ ('.login .email').val();
			var password = $ ('.login .password').val();
			
			if (!email){
				alert('Debe ingresar su correo');
			}
			else if (!password){
				alert('Debe ingresar una contraseña');
			}
			else {

				firebase.auth().signInWithEmailAndPassword(email, password)
				.then(function(){
					document.cookie = "user=.email";
					location.href='index1.html';
					alert('bienvenido');
				})
				.catch(function(error) {
					alert('No eres bienvenido');
				});
			}
		}
		)
});
$ ('.registro').on(
	'submit', function(r){
		r.preventDefault();
		var email = $ ('.registro .email').val();
		var password = $ ('.registro .password').val();

		if (!email) {
			alert('Debe ingresar su correo');
		}
		else if (!password){
			alert('Debe ingresar una contraseña');
		}
		else {
			firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(function(){
				alert('Registro con exito');
			})
			.catch(function(error) {
				alert('No se registro con exito')

			});
		}
	})