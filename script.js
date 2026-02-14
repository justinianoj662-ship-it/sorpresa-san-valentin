function verificar(){
    var clave = document.getElementById("clave").value.toLowerCase();

    if(clave === "mi susy"){  // puedes cambiar la contraseña aquí

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
    var texto = "Mi Susy... desde que llegaste a mi vida todo cambió. No es solo hoy, no es solo este momento... es cada sonrisa tuya, cada mirada, cada instante contigo lo que hace que mi mundo tenga sentido. ❤️";
    var i = 0;
    var velocidad = 45;

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
    extra.innerHTML = "Gracias por existir... gracias por elegirme... y gracias por ser mi Susy. 💍✨";
    extra.style.opacity = "1";
}
