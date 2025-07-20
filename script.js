document.addEventListener("DOMContentLoaded", function() {
    let progressBar = document.getElementById("progress-bar");
    let duration = 2000;
    let interval = 20;
    let elapsed = 0;

    let timer = setInterval(function() {
        elapsed += interval;
        let percent = Math.min(100, (elapsed / duration) * 100);
        progressBar.style.width = percent + "%";
        if (elapsed >= duration) {
            clearInterval(timer);
        }
    }, interval);

    setTimeout(function() {
        document.getElementById("load-splash").style.display = "none";
    }, duration); 


    // Reproducir música al abrir la página
    var audio = document.getElementById("audio-reproductor");
    if (audio) {
        // Intenta reproducir inmediatamente
        audio.play().catch(function() {
            // Si el navegador bloquea el autoplay, reproduce al primer click/touch
            var playAudio = function() {
                audio.play();
                document.removeEventListener('click', playAudio);
                document.removeEventListener('touchstart', playAudio);
            };
            document.addEventListener('click', playAudio);
            document.addEventListener('touchstart', playAudio);
        });
    }
});


function openContent(){
    document.getElementById("img-full").style.display = "none";
    document.getElementById("principal-container").style.display = "flex";
    document.getElementById("calendar-container").style.display = "block";
    document.getElementById("lugar-container").style.display = "block";
    document.getElementById("fotos-container").style.display = "block";
    document.getElementById("fiesta-detalles-container").style.display = "block";
    document.getElementById("regalos-container").style.display = "block";
    document.getElementById("envianos-tus-fotos").style.display = "block";
    document.getElementById("timer-container").style.display = "block";
    document.getElementById("footer-container").style.display = "block";
}

function getLocationCeremonia() {
    window.open("https://maps.app.goo.gl/mjvS6wxqpjmUZzdp6", "_blank");
}

function getLocationFestejo() {
    window.open("https://maps.google.com/?q=10.514257,-66.899101", "_blank");
}

function showModalDress() {
    document.getElementById("modal-1").style.display = "block";;
}

function showTipsNotas(){
    document.getElementById("modal-2").style.display = "block";;
}

function showRegalos() {
    document.getElementById("modal-3").style.display = "block";;
}

// Timer dinámico hasta el 8 de agosto de 2025 a las 3:00pm hora Caracas (UTC-4)
function actualizarContador() {
  // 2025-08-08 15:00:00 en Caracas (UTC-4) = 2025-08-08 19:00:00 UTC
  const fechaObjetivoUTC = Date.UTC(2025, 7, 8, 22, 0, 0); // Mes 7 = Agosto (0-indexed)
  const ahora = new Date();
  const ahoraUTC = ahora.getTime() + (ahora.getTimezoneOffset() * 60000);
  let diferencia = fechaObjetivoUTC - ahoraUTC;

  if (diferencia < 0) diferencia = 0;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  document.getElementById('contador-dias').textContent = String(dias).padStart(2, '0');
  document.getElementById('contador-horas').textContent = String(horas).padStart(2, '0');
  document.getElementById('contador-minutos').textContent = String(minutos).padStart(2, '0');
  document.getElementById('contador-segundos').textContent = String(segundos).padStart(2, '0');
}

actualizarContador();
setInterval(actualizarContador, 1000);


/* *
Familia Valencia Pagán


Familia Luján Pagán


Familia Gaspar Luján


Familia Yaguaramay 


Familia Yaguaramay Vivas


Familia García


Familia Gómez


Daniela Mendez


Familia Ramirez


Familia Quizpe


Familia Yaguaramay Pulido

Familia Luján Figuera


Familia Aular


Familia Sierra


Antoni Abello


 */

let familias = {
    1: "Familia Valencia Pagán",
    2: "Familia Luján Pagán",
    3: "Familia Gaspar Luján",
    4: "Familia Yaguaramay",
    5: "Familia Yaguaramay Vivas",
    6: "Familia García",
    7: "Familia Gómez",
    8: "Daniela Mendez",
    9: "Familia Ramirez",
    10: "Familia Quizpe",
    11: "Familia Yaguaramay Pulido",
    12: "Familia Luján Figuera",
    13: "Familia Aular",
    14: "Familia Sierra",
    15: "Antoni Abello"
}

const idDeFamilia = new URLSearchParams(window.location.search).get('id');

const familia = familias[idDeFamilia]

if(familia){
    document.getElementById("invitacion-name").textContent = 'Invitación para: '; 
    document.getElementById("famailia-name").textContent = familia; 
}