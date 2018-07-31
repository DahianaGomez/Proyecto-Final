
jQuery(document).ready(function($){


	$ ('#save_fb').click (function (dato){

		var data = $('#resena').html();
			console.log(data);
		database.ref ('lugares').push(data,function(err){
			if (err) { consol.log(err);}
			else { 
				alert('si llego bitch');
				//foodPlace.ref('negocio').push(informacionmau);
			}
		});
	});
});