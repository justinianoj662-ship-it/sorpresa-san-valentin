
// contraseña
function verificar(){
    var clave = document.getElementById("clave").value.toLowerCase();
    if(clave === "misusy"){
        document.getElementById("bloqueo").style.display="none";
        iniciarJuego();
        document.getElementById("musica").play();
    }else{
        document.getElementById("error").innerHTML="Esa no es 😅";
    }
}

// juego corazones
let atrapados = 0;

function iniciarJuego(){
    document.getElementById("juego").style.display="flex";
    generarCorazon();
}

function generarCorazon(){
    const heart=document.createElement("div");
    heart.classList.add("corazon-juego");
    heart.innerHTML="❤️";
    heart.style.left=Math.random()*90+"vw";
    heart.style.top=Math.random()*80+"vh";
    heart.onclick=function(){
        heart.remove();
        atrapados++;
        document.getElementById("contador").innerText=atrapados;
        if(atrapados<5){
            generarCorazon();
        }else{
            document.getElementById("juego").style.display="none";
            document.getElementById("contenido").style.display="block";
            document.getElementById("carta").style.display="block";
            document.getElementById("final").innerHTML="¿Quieres seguir escribiendo esta historia conmigo para siempre? 💍❤️";
        }
    };
    document.body.appendChild(heart);
}

// fondo estrellas
var canvas=document.getElementById("stars");
var ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var stars=[];
for(let i=0;i<200;i++){
    stars.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*2});
}

function drawStars(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="white";
    stars.forEach(s=>{
        ctx.beginPath();
        ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
        ctx.fill();
    });
}

setInterval(drawStars,50);
