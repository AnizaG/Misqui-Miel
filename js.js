let nav = document.getElementById("menSoc");

function menus() {
    let Desplazamiento_actual = window.pageYOffset;

    if (Desplazamiento_actual >= 40) {
    nav.classList.remove("bg-dark");
    nav.className = "bg-dark1";
    nav.style.transition = "1s";
    } else {
    nav.classList.remove("bg-dark1");
    nav.className = "bg-dark";
    nav.style.transition = "1s";
    }
}

window.addEventListener("load", function () {
    menus();
});

window.addEventListener("scroll", function () {
    menus();
});

// JQUERY PARA VALIDAR FORMULARIO //

$(document).ready(function () {
    if(document.getElementById("formulario")) {
        $("#formulario").validate({ 

    rules: {
        usuario: {
        required: true,
        minlength: 3,
        maxlength: 15,
        },
        contacto: {
        required: true,
        minlength: 10,
        maxlength: 50,
        },
        pedido: {
        required: true,
        minlength: 10,
        maxlength: 100,
        },
    },
    messages: {
        usuario: {
        required: "Debe ingresar Nombre y Apellido",
        minlength: "El usuario debe tener un mínimo de 3 carácteres",
        maxlength: "El usuario debe tener un máximo de 15 carácteres",
        },
        contacto: {
        required: "Debe ingresar número de contacto Válido",
        minlength: "El correo debe tener un mínimo de 10 carácteres",
        maxlength: "El correo debe tener un máximo de 50 carácteres",
        },
        pedido: {
        required: "Debe ingresar su pedido",
        minlength: "El mensaje debe tener como minimo 10 carácteres",
        maxlength: "El mensaje debe tener un máximo de 100 carácteres",
        },
    },
    });
    } 
});

//Inicio cambio de color//
function generarNuevoColor() {
    var simbolos, color;
    simbolos = "0123456789ABCDEF";
    color = "#";

    for (var i = 0; i < 6; i++) {
    color = color + simbolos[Math.floor(Math.random() * 16)];
    }

    document.body.style.background = color;
    document.getElementById("hexadecimal").innerHTML = color;
    document.getElementById("text").innerHTML = "Copiar Color";
}

function copiarAlPortapapeles(hexadecimal) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(hexadecimal).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    document.getElementById("text").innerHTML = "Copiado!";
}

//ALERTA BIENVENIDA//

//MAPA//
function iniciarMap() {
    var coord = { lat: -33.15370249061396,  lng: -71.31847090536782 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}

