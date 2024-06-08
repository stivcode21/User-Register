
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


/*PAGINA 1 a pagina 2*/
btn_adelante2.addEventListener("click", function(sig){ //cuando escuche un click se ejecuta la funcion
    sig.preventDefault(); //prevenir que se recree la pagina
    
    let nombre = document.getElementById("nombre").value;
    let apellido1 = document.getElementById("apellido1").value;
    let apellido2 = document.getElementById("apellido2").value;

    if (nombre==""){
        document.getElementById("nombres-error").innerHTML = "* Escribe tu nombre"
        document.getElementById("nombre").style.border = "2px solid #a8234a" 
    }else if (apellido1=="") {
        document.getElementById("apellido1-error").innerHTML = "*Tu Primer Apellido"
        document.getElementById("apellido1").style.border = "2px solid #a8234a"
    }else if (apellido2=="") {
        document.getElementById("apellido2-error").innerHTML = "*Tu segundo Apellido" 
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



/*PAGINA 2 a pagina 3*/
btn_adelante3.addEventListener("click", function(sig){ //cuando escuche un click se ejecuta la funcion
    sig.preventDefault(); //prevenir que se recree la pagina
    
    let fechaNac = document.querySelector('input[type="date"]').value;
    var sexo = document.getElementById("sexo").value;

    if ( sexo==-1 && fechaNac=="" ){
        document.getElementById("fechaNac-error").innerHTML = "* Seleccione una fecha"
        document.getElementById("fechaNac").style.border = "2px Solid #a8234a"
        document.getElementById("sexo-error").innerHTML = "* Seleccione una opcion."
        document.getElementById("sexo").style.border = "2px solid #a8234a"
    
    }else if ( sexo==-1 || fechaNac=="" ) {

        if ( sexo==-1) {
            document.getElementById("sexo-error").innerHTML = "* Seleccione una opcion."
            document.getElementById("sexo").style.border = "2px solid #a8234a"
        }else {
            document.getElementById("sexo-error").innerHTML = ""
            document.getElementById("sexo").style.border = "none"
        }

        if ( fechaNac=="" ){
            document.getElementById("fechaNac-error").innerHTML = "* seleccione una fecha"
            document.getElementById("fechaNac").style.border = "2px solid #a8234a"
        }else {
            document.getElementById("fechaNac-error").innerHTML = ""
            document.getElementById("fechaNac").style.border = "none"
        }

    }
    
    else{
    document.getElementById("sexo-error").innerHTML = ""
    document.getElementById("sexo").style.border = "none"
    document.getElementById("fechaNac-error").innerHTML = ""
    document.getElementById("fechaNac").style.border = "none"

    movPag.style.marginLeft = "-50%"; // de 25% pasa a 50% para darle paso ala siguiente
    num[cont - 1].classList.add("active"); 
    progressText[cont - 1].classList.add("active");
    progresscheck[cont - 1].classList.add("active");
    cont += 1;
}
})

/*PAGINA 2 - atras pagina 1*/
btn_atras1.addEventListener("click", function(sig){ 
    sig.preventDefault(); 
    movPag.style.marginLeft = "0%"; //regresaria al 0% 
    num[cont - 2].classList.remove("active"); 
    progressText[cont - 2].classList.remove("active");
    progresscheck[cont - 2].classList.remove("active");
    cont -= 1;
})



/*PAGINA 3 a pagina 4*/
btn_adelante4.addEventListener("click", function(sig){ 
    sig.preventDefault(); 

let correo = document.getElementById("correo").value;
let numCel = document.getElementById("numCel").value;
if (correo=="" && numCel=="" ){
    document.getElementById("correo-error").innerHTML = "* Escribe tu Email"
    document.getElementById("correo").style.border = "2px solid #a8234a"
    document.getElementById("numCel-error").innerHTML = "* Escribe tu N° de telefono"
    document.getElementById("numCel").style.border = "2px solid #a8234a"
}else if (correo=="" || numCel=="" ||
          correo.length<6 || numCel.length!=10 || 
          !verificarCorreo(correo) || !verificarNumCel(numCel)
        ){
        
            if(correo=="") {
                document.getElementById("correo-error").innerHTML = "* No puede quedar vacio"
                document.getElementById("correo").style.border = "2px solid #a8234a"
            }else if (correo.length<6){
                document.getElementById("correo-error").innerHTML = "* 6 o mas caracteres"
                document.getElementById("correo").style.border = "2px solid #a8234a"
            }else if (!verificarCorreo(correo)) {
                document.getElementById("correo-error").innerHTML = "* No olvidaste el @?"
                document.getElementById("correo").style.border = "2px solid #a8234a"
            }else{
                document.getElementById("correo-error").innerHTML = ""
                document.getElementById("correo").style.border = "none"
            }
            if(numCel=="") {
                document.getElementById("numCel-error").innerHTML = "* No puede quedar vacio"
                document.getElementById("numCel").style.border = "2px solid #a8234a"
            }else if (numCel.length!=10 && !verificarNumCel(numCel)) {
                document.getElementById("numCel-error").innerHTML = "* Debe ingresar solo numeros"
                document.getElementById("numCel").style.border = "2px solid #a8234a"
            }else if (numCel.length!=10){
                document.getElementById("numCel-error").innerHTML = "* Debe tener 10 digitos"
                document.getElementById("numCel").style.border = "2px solid #a8234a"
            }else if (!verificarNumCel(numCel)) {
                document.getElementById("numCel-error").innerHTML = "* Datos invalidos"
                document.getElementById("numCel").style.border = "2px solid #a8234a"
            }else {
                document.getElementById("numCel-error").innerHTML = ""
                document.getElementById("numCel").style.border = "none"
            }
        }else{
            document.getElementById("correo-error").innerHTML = ""
            document.getElementById("correo").style.border = "none"
            document.getElementById("numCel-error").innerHTML = ""
            document.getElementById("numCel").style.border = "none"

    movPag.style.marginLeft = "-75%"; //de 50% pasa a 75% para darle pason ala siguiente
    num[cont - 1].classList.add("active"); 
    progressText[cont - 1].classList.add("active");
    progresscheck[cont - 1].classList.add("active");
    cont += 1;
}

//funcion verificar correo
function verificarCorreo($n){
    let ExpRegular_Correo = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return ExpRegular_Correo.test($n);
}

//funcion verificar numero de telefono
function verificarNumCel($m){
    let ExpRegular_Num = /^[\d]+$/;
    return ExpRegular_Num.test($m);
}

})

/*PAGINA 3 - atras pagina 2*/
btn_atras2.addEventListener("click", function(sig){ 
    sig.preventDefault(); 
    movPag.style.marginLeft = "-25%"; //regresaria al 25%
    num[cont - 2].classList.remove("active"); 
    progressText[cont - 2].classList.remove("active");
    progresscheck[cont - 2].classList.remove("active");
    cont -= 1;
})



/*pagina 4 - fin*/
btn_final.addEventListener("click", function(sig){ 
    sig.preventDefault(); 

    let usuario = document.getElementById("usuario").value;
    let contra = document.getElementById("contra").value;

    if (usuario=="" && contra=="") {
        document.getElementById("usuario-error").innerHTML = "* Escribe tu nombre usuario"
        document.getElementById("usuario").style.border = "2px solid #a8234a"
        document.getElementById("contra-error").innerHTML = "* Escribe tu contraseña"
        document.getElementById("contra").style.border = "2px solid #a8234a"

    }else if (usuario=="" || contra=="" ||
            usuario.length<2 || contra.length<5 ||
            !verificarUsuario(usuario) || !verificarContra(contra)
    ){
        if (usuario==""){
         document.getElementById("usuario-error").innerHTML = "* Escribe tu nombre usuario"
         document.getElementById("usuario").style.border = "2px solid #a8234a"
        }else if (usuario.length<2 && !verificarUsuario(usuario)){
         document.getElementById("usuario-error").innerHTML = "* Mayusculas, Minusculas y letras"
         document.getElementById("usuario").style.border = "2px solid #a8234a"
        }else if (usuario.length<2) {
         document.getElementById("usuario-error").innerHTML = "* Debe tener 3 o mas caracteres"
         document.getElementById("usuario").style.border = "2px solid #a8C234a"
        }else if (!verificarUsuario(usuario)) {
         document.getElementById("usuario-error").innerHTML = "* Ingreso datos invalidos"
         document.getElementById("usuario").style.border = "2px solid #a8C234a"
        }else{
         document.getElementById("usuario-error").innerHTML = ""
         document.getElementById("usuario").style.border = "none"
        }

        if (contra==""){
         document.getElementById("contra-error").innerHTML = "* Escribe tu contraseña"
         document.getElementById("contra").style.border = "2px solid #a8234a"
        }else if (contra.length<5 && !verificarContra(contra)) {
         document.getElementById("contra-error").innerHTML = "* Mayuscula, minuscula y N°"
         document.getElementById("contra").style.border = "2px solid #a8234a"
        }else if (contra.length<5){
         document.getElementById("contra-error").innerHTML = "* Minimo 6 caracteres"
         document.getElementById("contra").style.border = "2px solid #a8234a"
        }else if (!verificarContra(contra)){
         document.getElementById("contra-error").innerHTML = "* Mayuscula, minuscula y N°"
         document.getElementById("contra").style.border = "2px solid #a8234a"
        }else {
         document.getElementById("contra-error").innerHTML = ""
         document.getElementById("contra").style.border = "none"
        }

    }else{
        alert("Aqui Finaliza El Registro. GRACIASS!")
        limpiar();
        num[cont - 1].classList.add("active"); 
        progressText[cont - 1].classList.add("active");
        progresscheck[cont - 1].classList.add("active");
        cont += 1;
    }


// Funcion verificar usuario
    function verificarUsuario($n){
        let ExpRegular_Usuario = /^[a-zA-Z][a-zA-Z0-9_]{3,9}$/;
        return ExpRegular_Usuario.test($n);
    }

// Funcion verificar contraseña
    function verificarContra($n){
        let ExpRegular_Contra = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/;
        return ExpRegular_Contra.test($n);
    }

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



