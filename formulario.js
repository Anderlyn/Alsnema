let formularioDiv = new Array();
formularioDiv[0] = "nombreDiv";
formularioDiv[1] = "duracionDiv";
formularioDiv[2] = "generoDiv";
formularioDiv[3] = "idiomaAudioDiv";
formularioDiv[4] = "idiomaSubDiv";
formularioDiv[5] = "sinopsisDiv";
formularioDiv[6] = "clasificacionDiv";
formularioDiv[7] = "precioDiv";
formularioDiv[8] = "fechaDiv";
formularioDiv[9] = "horaInicioDiv";
formularioDiv[10] = "minutoInicioDiv";
formularioDiv[11] = "imagenDiv";
formularioDiv[12] = "estadoDiv";

$(document).ready(function(){
  document.getElementById("nombreDiv").style.display = "block";
});
function agregarOtro(){
  location.reload();
}
function formulario(m){


  let actualNum = document.getElementById("actualNum").value;
  document.getElementById("botonguardar").style.display = "none";
  let newNumber = Number(actualNum) + Number(m);
  if(Number(newNumber) >= 1){
    document.getElementById("atras").style.display = "block";
  }else{
    document.getElementById("atras").style.display = "none";
  }

  if(newNumber < 12){
    document.getElementById("adelante").style.display = "initial";
  }else{
    document.getElementById("adelante").style.display = "none";
  }


  if(!(newNumber > 12) && (m === 1)){
    document.getElementById("actualNum").value = newNumber;
    if(!(Number(newNumber) === 12)){
      document.getElementById(formularioDiv[actualNum]).style.display = "none";
      document.getElementById(formularioDiv[newNumber]).style.display = "block";
    }else{
      document.getElementById(formularioDiv[actualNum]).style.display = "none";
      document.getElementById(formularioDiv[newNumber]).style.display = "block";
      document.getElementById("botonguardar").style.display = "initial";
    }
  }else if((actualNum > 0) && (m === -1)){
    document.getElementById("actualNum").value = newNumber;
    document.getElementById(formularioDiv[actualNum]).style.display = "none";
    document.getElementById(formularioDiv[newNumber]).style.display = "block";
  }else{
    if(Number(actualNum) === 12){
      document.getElementById("botonguardar").style.display = "initial";
    }
  }
}
