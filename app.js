// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
// Programa Final
let amigos = []

let currentAudio = null; // Variable global para 


function agregarAmigo(){
 
    let nombreDeAmigo = document.getElementById("amigo").value;
    
    if (nombreDeAmigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

     // Validar si el nombre ya está en la lista
     if (amigos.includes(nombreDeAmigo)) {
        alert("Este nombre ya ha sido ingresado. No puedes agregarlo nuevamente.");
        amigo.value = "";
        return;
    }
    
    amigos.push(nombreDeAmigo);
 
    // Limpiar el input amigo después de agregar
    amigo.value = "";
    
    // Actualizar la lista en la pantalla
    mostrarAmigos();

    return;
}


//Vamos a crear la funcion mostrarAmigos()

function mostrarAmigos() {
    // Vamos a obtener la lista <ul>
    let listaul = document.getElementById("listaAmigos"); 

//  Hay que limpiar la lista ul antes de actualizarla
    listaul.innerHTML = ""; 

    // Recorrer el array amigos y agregar cada nombre como un elemento <li>
    for (let i = 0; i < amigos.length; i++) {

        // Crear un <li>
        let li = document.createElement("li");

        // Asignar el nombre
        li.textContent = amigos[i]; 

        // Agregar el elemento <li> a la lista <ul>
        listaul.appendChild(li); 
    }
}

/*
function sortearAmigo(){

// Evita que el usuario ponga un campo vacio
    if (amigos.length === 0) {
        alert("Debes agregar al menos un amigo antes de poder sortear.");
        return;
    }
// toma un amigo de la lista usando un numero aleatorio y tomando ese numero como lugar en el arreglo
    let AmigoSecreto = amigos[Math.floor(Math.random()*amigos.length)];

// Aqui queremos mostrar el resultado, selecciona el elemento html con el id resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es ${AmigoSecreto}`
    return;
}
*/


/*
function sortearAmigo(){
    if (amigos.length === 0) {
        alert("Debes agregar al menos un amigo antes de poder sortear.");
        return;
    }
    
    // Selecciona un amigo de forma aleatoria
    let AmigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    
    // Muestra el resultado en el HTML
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es ${AmigoSecreto}`;
    
    // Si el amigo seleccionado es Johnny Silverhand, reproduce el fragmento de audio
    if (AmigoSecreto.toLowerCase() === "johnny silverhand") {
        // Crea un objeto Audio.
        let audio = new Audio("./assets/johnny1.m4a");
        audio.play().catch(error => {
            console.error("Error al reproducir el audio:", error);
        });
    }
    
    return;
}
*/
/*
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debes agregar al menos un amigo antes de poder sortear.");
        return;
    }

    // Seleccionar un amigo al azar
    const indice = Math.floor(Math.random() * amigos.length);
    const AmigoSecreto = amigos[indice];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es ${AmigoSecreto}`;

    // Si el amigo secreto es Johnny Silverhand, reproducir el fragmento y luego mostrar el botón
    if (AmigoSecreto.trim().toLowerCase() === "johnny silverhand") {
        const audioFragmento = new Audio("./assets/johnny1.m4a");
        audioFragmento.load();
        audioFragmento.play()
            .then(() => {
                console.log("Fragmento reproduciéndose...");
            })
            .catch(error => {
                console.error("Error al reproducir el fragmento:", error);
            });

        // Al finalizar el fragmento, mostrar el botón para continuar
        audioFragmento.addEventListener("ended", () => {
            mostrarBotonContinuar();
        });
    }
}

function mostrarBotonContinuar() {
    const contenedor = document.getElementById("continuar-container");
    contenedor.style.display = "flex";
}

// Agregar event listener al botón estático "btnContinuar" (definido en index.html)
document.getElementById("btnContinuar").addEventListener("click", () => {
    // Ocultar el contenedor del botón para evitar múltiples reproducciones
    document.getElementById("continuar-container").style.display = "none";

    const audioCompleto = new Audio("./assets/neverfade.m4a");
    audioCompleto.load();
    audioCompleto.play()
        .then(() => {
            console.log("Canción completa reproduciéndose...");
        })
        .catch(error => {
            console.error("Error al reproducir la canción completa:", error);
        });
});

*/




function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debes agregar al menos un amigo antes de poder sortear.");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const AmigoSecreto = amigos[indice];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es ${AmigoSecreto}`;

    // Si el amigo secreto es "Johnny Silverhand", reproducir el fragmento
    if (AmigoSecreto.trim().toLowerCase() === "johnny silverhand") {
        const audioFragmento = new Audio("assets/johnny1.m4a");
        currentAudio = audioFragmento;
        audioFragmento.load();
        audioFragmento.play()
            .then(() => {
                console.log("Fragmento reproduciéndose...");
                // Mostrar controles de audio para pausar/reanudar mientras suena el fragmento
                document.getElementById("audio-controls").style.display = "flex";
                document.getElementById("btnPause").textContent = "Pausar Canción";
            })
            .catch(error => {
                console.error("Error al reproducir el fragmento:", error);
            });

        // Cuando el fragmento termine, ocultar controles y mostrar el botón para continuar
        audioFragmento.addEventListener("ended", () => {
            document.getElementById("audio-controls").style.display = "none";
            mostrarBotonContinuar();
        });
    }
}

function mostrarBotonContinuar() {
    const contenedor = document.getElementById("continuar-container");
    contenedor.style.display = "flex";
}

// Event listener para el botón "Continuar" (para reproducir la canción completa)
document.getElementById("btnContinuar").addEventListener("click", () => {
    // Ocultar el contenedor del botón de continuar
    document.getElementById("continuar-container").style.display = "none";

    const audioCompleto = new Audio("./assets/neverfade.m4a");
    currentAudio = audioCompleto;
    audioCompleto.load();
    audioCompleto.play()
        .then(() => {
            console.log("Canción completa reproduciéndose...");
            // Mostrar controles de audio para pausar/reanudar mientras suena la canción completa
            document.getElementById("audio-controls").style.display = "flex";
            document.getElementById("btnPause").textContent = "Pausar Canción";
        })
        .catch(error => {
            console.error("Error al reproducir la canción completa:", error);
        });

    // Al terminar la canción completa, ocultar los controles de audio
    audioCompleto.addEventListener("ended", () => {
        document.getElementById("audio-controls").style.display = "none";
    });
});

// Event listener para el botón de pausar/reanudar
document.getElementById("btnPause").addEventListener("click", () => {
    if (currentAudio) {
        if (currentAudio.paused) {
            // Reanudar la reproducción
            currentAudio.play()
                .then(() => {
                    document.getElementById("btnPause").textContent = "Pausar Canción";
                })
                .catch(error => {
                    console.error("Error al reanudar la canción:", error);
                });
        } else {
            // Pausar la reproducción
            currentAudio.pause();
            document.getElementById("btnPause").textContent = "Reanudar Canción";
        }
    }
});