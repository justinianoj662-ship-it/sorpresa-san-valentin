function verificar(){
    var clave = document.getElementById("clave").value.toLowerCase();

    if(clave === "mi susy"){  // ← CAMBIA AQUÍ SI QUIERES OTRA PALABRA

        document.getElementById("inicio").style.display="none";
        document.getElementById("contenido").style.display="block";

        var musica = document.getElementById("musica");
        musica.play();

        escribirMensaje();

    }else{
        alert("Esa no es nuestra palabra secreta 💔");
    }
}

function escribirMensaje(){
    var texto = "No es solo hoy... es cada momento contigo lo que hace que mi mundo tenga sentido. 💖";
    var i = 0;
    var velocidad = 50;

    function maquina(){
        if(i < texto.length){
            document.getElementById("mensaje").innerHTML += texto.charAt(i);
            i++;
            setTimeout(maquina, velocidad);
        }
    }

    maquina();
}

function mensajeFinal(){
    var extra = document.getElementById("extra");
    extra.innerHTML = "Gracias por existir... y por dejarme amarte. 💍✨";
    extra.style.opacity = "1";
}
