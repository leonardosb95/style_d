$(document).ready(function() {
    imprimiTextoPersonalizado();
});


function imprimiTextoPersonalizado() {
    var textoPersonalizado = "STYLE D REFERENCE";
    var i = 0;
    var imprimiTexto = setInterval(function() {
        i++;
        if (textoPersonalizado.length == i) {
            i = 0;
        }
        $(".texto-personalizado").text(textoPersonalizado.substring(0, i));
    }, 700);
}