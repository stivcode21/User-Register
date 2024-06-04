
                    /*MOVIMIENTO DE PAGINAS */

const movPag = document.querySelector(".movPag"); //va traer un elemento y lo almacena en la variable

/*MOVIMIENTO DE PAGINA 1*/
const btn_adelante2 = document.querySelector(".sigPag");

/*MOVIMIENTO DE PAGINA 2*/
const btn_atras1 = document.querySelector(".volver-pag-1");
const btn_adelante3 = document.querySelector(".adelante-pag3");

/*MOVIMIENTO DE PAGINA 3*/
const btn_atras2 = document.querySelector(".volver-pag-2");
const btn_adelante4 = document.querySelector(".adelante-pag4");

/*MOVIMIENTO DE PAGINA 4*/
const btn_atras3 = document.querySelector(".volver-pag-3");
const btn_final = document.querySelector(".fin");

/*progress bar */
const progressText = document.querySelectorAll(".paso p")    //esta variable se transforma en una lista(array)
const progresscheck = document.querySelectorAll(".paso .check")
const num = document.querySelectorAll(".paso .num")

let max = 4;
let cont = 1;


                /*PAGINA 1 / sig-pag2*/
btn_adelante2.addEventListener("click", function(sig){ //cuando escuche un click se ejecuta la funcion
    sig.preventDefault(); //prevenir que se recree la pagina
    
    let nombre = document.getElementById("nombre").value;
    let apellido1 = document.getElementById("apellido1").value;
    let apellido2 = document.getElementById("apellido2").value;

    if (nombre==""){
        document.getElementById("nombres-error").innerHTML = "* escribe tu nombre"
        document.getElementById("nombre").style.border = "2px solid #a8234a" 
    }else if (apellido1=="") {
        document.getElementById("apellido1-error").innerHTML = "*tu Primer Apellido"
        document.getElementById("apellido1").style.border = "2px solid #a8234a"
    }else if (apellido2=="") {
        document.getElementById("apellido2-error").innerHTML = "*tu segundo Apellido" 
        document.getElementById("apellido2").style.border = "2px solid #a8234a" 
    }   
        
    else{
    movPag.style.marginLeft = "-25%"; //el 100% se divide en las 4pag dando asi 25%
    num[cont - 1].classList.add("active"); //agrega ala lista alemento n°1 - (0) la clase (active)
    progressText[cont - 1].classList.add("active");
    progresscheck[cont - 1].classList.add("active");
    cont += 1;

    document.getElementById("nombre").style.border = "none"
    document.getElementById("nombres-error").innerHTML = " "
    document.getElementById("apellido1").style.border = "none"
    document.getElementById("apellido1-error").innerHTML = " "
    document.getElementById("apellido2").style.border = "none"
    document.getElementById("apellido2-error").innerHTML = " " 
}
});



                /*PAGINA 2 / sig-pag3*/
btn_adelante3.addEventListener("click", function(sig){ //cuando escuche un click se ejecuta la funcion
    sig.preventDefault(); //prevenir que se recree la pagina
    movPag.style.marginLeft = "-50%"; // de 25% pasa a 50% para darle paso ala siguiente
    num[cont - 1].classList.add("active"); 
    progressText[cont - 1].classList.add("active");
    progresscheck[cont - 1].classList.add("active");
    cont += 1;
})
/*PAGINA 2 / atras-pag1*/
btn_atras1.addEventListener("click", function(sig){ 
    sig.preventDefault(); 
    movPag.style.marginLeft = "0%"; //regresaria al 0% 
    num[cont - 2].classList.remove("active"); 
    progressText[cont - 2].classList.remove("active");
    progresscheck[cont - 2].classList.remove("active");
    cont -= 1;
})



                /*PAGINA 3 / sig-pag4*/
btn_adelante4.addEventListener("click", function(sig){ 
    sig.preventDefault(); 
    movPag.style.marginLeft = "-75%"; //de 50% pasa a 75% para darle pason ala siguiente
    num[cont - 1].classList.add("active"); 
    progressText[cont - 1].classList.add("active");
    progresscheck[cont - 1].classList.add("active");
    cont += 1;
})
/*PAGINA 3 / atras-pag2*/
btn_atras2.addEventListener("click", function(sig){ 
    sig.preventDefault(); 
    movPag.style.marginLeft = "-25%"; //regresaria al 25%
    num[cont - 2].classList.remove("active"); 
    progressText[cont - 2].classList.remove("active");
    progresscheck[cont - 2].classList.remove("active");
    cont -= 1;
})



                /*pagina 4 / fin*/
btn_final.addEventListener("click", function(sig){ 
    alert("aqui finaliza el registro.  ")
    limpiar();
    num[cont - 1].classList.add("active"); 
    progressText[cont - 1].classList.add("active");
    progresscheck[cont - 1].classList.add("active");
    cont += 1;
})
/*PAGINA 4 / atras-pag3*/
btn_atras3.addEventListener("click", function(sig){ 
    sig.preventDefault(); 
    movPag.style.marginLeft = "-50%"; //regresaria al 50%
    num[cont - 2].classList.remove("active"); 
    progressText[cont - 2].classList.remove("active");
    progresscheck[cont - 2].classList.remove("active");
    cont -= 1;
})





//funcion mostrar la contraseña
function mostraContra() {
    let input = document.getElementById("contra");
    let ocultar = document.getElementById("Ocultar");
    let mostrar = document.getElementById("Mostrar");

    if (input.type=='password') {
        input.type="text";
        ocultar.style.display="none";
        mostrar.style.display="block";
    }else{
        input.type="password";
        ocultar.style.display="block";
        mostrar.style.display="none";
    }
}

//funcion limpiar


function limpiar(){
    document.getElementById("nombre").value = "";
    document.getElementById("apellido1").value = "";
    document.getElementById("apellido2").value = "";
    document.querySelector('input[type="date"]').value = "";
    document.getElementById("sexo").value = -1;
    document.getElementById("correo").value = "";
    document.getElementById("numCel").value = "";
    document.getElementById("usuario").value = "";
    document.getElementById("contra").value = "";
}



