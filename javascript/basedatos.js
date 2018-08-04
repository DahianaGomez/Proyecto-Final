var config = {
    apiKey: "AIzaSyBNc2Ye2xjMU5QYRztEM8dJcgUlhWtWdNc",
    authDomain: "foodplace-c4798.firebaseapp.com",
    databaseURL: "https://foodplace-c4798.firebaseio.com",
    projectId: "foodplace-c4798",
    storageBucket: "foodplace-c4798.appspot.com",
    messagingSenderId: "510515919484"
  };
  firebase.initializeApp(config);

 const database = firebase.database();
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
    salchipapas:$('super').val(),
 }
