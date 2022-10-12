//funcion que muestra el menu responsivo
function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

//Funcion que aplica el estilo a la opcion seleccionada en el menu y quita la previamente seleccionada
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones(0).className = "";
    opciones(1).className = "";
    opciones(2).className = "";
    opciones(3).className = "";
    opciones(4).className = "";
    link.className = "seleccionado";

    //ocultar el menu responsivo despues de haber seleccionado una opcion
    var x = document.getElementById("nav");
    x.className = "";
}


//Detectar el scrolling para aplicar la animación de las barras de habilidades
window.onscroll = function(){
    efectoHabilidades()
};

//Funcion que aplica la animacion de la barra de habilidades
function efectoHabilidades(){
   var skills = document.getElementById("skills");
   var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
   if(distancia_skills >= 300){
       document.getElementById("html").classList.add("barra-progreso1");
       document.getElementById("js").classList.add("barra-progreso2");
       document.getElementById("bd").classList.add("barra-progreso3");
       document.getElementById("ps").classList.add("barra-progreso4");
   }
}

