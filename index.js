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

function salir(){
  localStorage.removeItem('usuariologueado');
  location.href = "login.html";
}
