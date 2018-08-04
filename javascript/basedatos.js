<<<<<<< HEAD:javascript/basedatos.js
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
 	reseña:$('#resena'),
 }

 
 const database = firebase.database();
 var lugares = $ ('.chuzos').val();
 var datos={
 	reseña:$('#ricos'),
 }

 const database = firebase.database();
 var lugares = $ ('.chorizos').val();
 var datos={
 	reseña:$('#carne'),
=======
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
 	reseña:$('#resena'),
 }

 
 const database = firebase.database();
 var lugares = $ ('.chuzos').val();
 var datos={
 	reseña:$('#ricos'),
 }

 const database = firebase.database();
 var lugares = $ ('.chorizos').val();
 var datos={
 	reseña:$('#carne'),
>>>>>>> origin/gh-page:basedatos.js
 }