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
var userName = window.localStorage.getItem('email');
  

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
  $('.caja').append(dahia.usuario + ': ' + dahia.mensaje + '<br>' );
}
function iterar(data){
  for ( var ciclo in data){
    if (data.hasOwnProperty(ciclo)){
      var element = data[ciclo];
      var paraCambiar ={
        usuario: element.userName,
        mensaje: element.mensaje,
      };
      ponerMensaje(element);
    }
  }
}

var traerMensajes = new Promise(function(res, rej){
  var mensajes = database.ref('/chat/').once('value').then(function(snapshot){
    return res( snapshot.val() );

  });
  if (!mensajes){return rej();}
});

traerMensajes.then(function(data){
  iterar(data);
});

$('.boton1').on(
        'click',
        function(e){
            e.preventDefault();

            firebase.auth().signOut()
            .then(function() {
              location.href='index.html';
                alert("Cerraste sesion.");
            })
            .catch(function(error) {
                  alert("Algo salio mal...");
          })

        })

