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
  window.localStorage.setItem('email', '.email');
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
  $('.caja').append(userName + ': ' + dahia.mensaje + '<br>' );
}

$('.boton1').on(
        'click',
        function(e){
            e.preventDefault();

            firebase.auth().signOut()
            .then(function() {
              location.href='index1.html';
                alert("Cerraste sesion.");
            })
            .catch(function(error) {
                  alert("Algo salio mal...");
          })

        })

