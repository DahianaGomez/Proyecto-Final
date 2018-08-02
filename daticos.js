
jQuery(document).ready(function($){


	$ ('#save_fb').click (function (dato){

		var data = $('#resena').html();
		console.log(data);
		database.ref ('lugares').push(data,function(err){
			if (err) { consol.log(err);}
			else { 
				alert('si llego bitch');
				var lugares = $ ('.container').val();
				var datos={
					reseña:$('#resena').val(),
					chuzos:$('#ricos').val(),
					chorizos:$('carne').val(),
					empanadas:$('picantes').val(),
					perros:$('conTodo').val(),
					pizza:$('deli').val(),
					lina:$('cole').val(),
					ricas:$('roci').val(),
					mandis:$('rocio').val(),
					salchipapas:$('super').val()
				}
				firebase.database().ref ('lugares').push(datos);
				//foodPlace.ref('negocio').push(informacionmau);
			}
		});
	});
});