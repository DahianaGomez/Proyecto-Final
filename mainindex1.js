 var config = {
    apiKey: "AIzaSyBNc2Ye2xjMU5QYRztEM8dJcgUlhWtWdNc",
    authDomain: "foodplace-c4798.firebaseapp.com",
    databaseURL: "https://foodplace-c4798.firebaseio.com",
    projectId: "foodplace-c4798",
    storageBucket: "foodplace-c4798.appspot.com",
    messagingSenderId: "510515919484"
  };
  firebase.initializeApp(config);

  jQuery(document).ready(function($) {

  });
const database = firebase.database();
var userName = ('usuario');
  

  $('#enviar').click( function( event ) {
  event.preventDefault();
  var mensaje = $('#mensaje').val();

  var data = { usuario: userName, mensaje: mensaje };
  database.ref('chat/').push(data, function(err) {
    if (err) { throw err;}
    else { 
      console.info('Guardamos la informacion');
      ponerMensaje(data);
      $('#mensaje').val('');
    }
  });

});

function ponerMensaje (dahia){
  console.log(userName);
  $('.caja').append(userName + ': ' + dahia.mensaje + '<br>' );
}



