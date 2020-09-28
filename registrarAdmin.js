$(document).ready(function(){

  if(localStorage.getItem('usuariologueado') === null){
    //location.href = "login.html";
  }
});

let menuAbierto = false;
function menu(){
  if(!menuAbierto){
    document.getElementById("menuTotal").style.animation = "animarMenuS 1s forwards";
    $("#menuImg").removeClass("fa fa-align-justify");
    $("#menuImg").addClass("fa fa-remove");
    menuAbierto = true;
  }else if(menuAbierto){
    document.getElementById("menuTotal").style.animation = "animarMenuE 1s forwards";

    $("#menuImg").removeClass("fa fa-remove");
    $("#menuImg").addClass("fa fa-align-justify");
    menuAbierto = false;
  }
}
var imagenenbase64 = "";
$("#file").change(function(){
readURL(this);
});

function readURL(input) {

       if (input.files && input.files[0]) {
           var reader = new FileReader();

           reader.onload = function (e) {

               imagenenbase64=e.target.result;



           }

           reader.readAsDataURL(input.files[0]);
       }
}

function agregarOtro(){
  location.reload();
}
function salir(){
  localStorage.removeItem('usuariologueado');
  location.href = "login.html";
}

function agregarAdmin(){


let admactual = new _adm('0',
        document.getElementById("nombre").value,
              document.getElementById("clave").value,
              document.getElementById("email").value,
              document.getElementById("estado").value,
      imagenenbase64

        );
        admactual.Guardar(admactual).then(function(response) {
  console.log("Success!", response);
            document.getElementById("container").innerHTML = "Guardado con éxito. <br> <a id='agregarOtro' href='javascript:agregarOtro()'>Agregar otro</a>";
}, function(error) {
  console.error("Failed!", error);
             alert("Error " + error);
});
}
