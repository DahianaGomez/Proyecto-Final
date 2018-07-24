
   // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBNc2Ye2xjMU5QYRztEM8dJcgUlhWtWdNc",
    authDomain: "foodplace-c4798.firebaseapp.com",
    databaseURL: "https://foodplace-c4798.firebaseio.com",
    projectId: "foodplace-c4798",
    storageBucket: "foodplace-c4798.appspot.com",
    messagingSenderId: "510515919484"
  };
  firebase.initializeApp(config);

  var data = {};
  data.userName = 'Dahiana';
  const database = firebase.database();

  $('button').click( function( event ) {
  event.preventDefault();
  console.log('data', data);
  data.mensaje = $('#mensaje').val();
  ponerMensaje(data);

  //var data = { usuario: userName, mensaje: mensaje };
  /*database.ref('chat/').push(data, function(err) {
    if (err) { throw err;}
    else { 
      console.info('Guardamos la información');
      $('#mensaje').val('');
    }
  });*/
});

function ponerMensaje (dahia){
  console.log('data', dahia);
  $('.caja').append('<p>' + dahia.userName + ': ' + dahia.mensaje +  '<p>');
}