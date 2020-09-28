$(document).ready(function(){

  if(localStorage.getItem('usuariologueado') != null){
  location.href = "index.html";
  }
});



function login(){

let admactual = new _adm('0',
        "",
              document.getElementById("clavelogin").value,
              document.getElementById("emaillogin").value,
              "",
      ""

        );
        admactual.Login().then(function(response) {
  console.log("Success!", response);
            localStorage.setItem('usuariologueado',JSON.stringify(response));
            location.href = 'index.html';

}, function(error) {
  console.error("Failed!", error);
             alert("Contraseña/Correo incorrect@.");

});
}
