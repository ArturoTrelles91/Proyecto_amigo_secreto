// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
// Programa Final
let amigos = []
let amigosSorteados = []; 
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

    // Verifica si hay 4 o más nombres en la lista y mueve el botón
    let drawButton = document.querySelector(".button-draw");
    
    //console.log(drawButton); // Esto debe imprimir el botón en la consola
    if (amigos.length >= 4) {
        drawButton.classList.add("fixed");
        //console.log("Clase 'fixed' añadida"); // Confirmación en consola
    } else {
        drawButton.classList.remove("fixed");
        //console.log("Clase 'fixed' eliminada"); // Confirmación en consola
    }

    let listaul = document.getElementById("listaAmigos");

    if (amigos.length >= 4) {
      listaul.classList.add("compact");
    } else {
      listaul.classList.remove("compact");
    }


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


let longitudOriginal = amigos.length; // Guarda la longitud original
function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert("Necesitas agregar al menos un amigo para poder sortear.");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const AmigoSecreto = amigos[indice];

    const resultado = document.getElementById("resultado");
   

    
    resultado.innerHTML = `El amigo secreto es ${AmigoSecreto}`;

     // Eliminar al amigo secreto seleccionado de la lista para que no pueda ser seleccionado nuevamente
     amigos.splice(indice, 1);  // Elimina 1 elemento en el índice seleccionado
     // Agregar el amigo sorteado a amigosSorteados
     amigosSorteados.push(AmigoSecreto);
     mostrarAmigos();
   

   
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

    // Si ya no hay amigos, muestra un mensaje y regresa el botón al original
    if (amigos.length === 0) {
        alert("Ya se han sorteado todos los amigos.");
     
    }

    // Mostrar el botón para reiniciar el juego cuando todos hayan sido sorteados
    if (amigosSorteados.length === longitudOriginal.length) {
        console.log(amigosSorteados.length);
        console.log(longitudOriginal.length);

        mostrarBotonReiniciar();
    }

    
}

function mostrarBotonContinuar() {
    const contenedor = document.getElementById("continuar-container");
    contenedor.style.display = "flex";
}

function mostrarBotonReiniciar() {
    const reiniciarButton = document.getElementById("reiniciarButton");
    reiniciarButton.style.display = "block"; // Hacer visible el botón de reiniciar
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


document.getElementById("reiniciarButton").addEventListener("click", reiniciarJuego);


function reiniciarJuego() {
    // Limpiar la lista de amigos y resultados
    amigos = [];
    mostrarAmigos();
    document.getElementById("resultado").innerHTML = ""; // Limpiar el resultado

    // Volver el botón de sortear a su posición original
    const drawButton = document.querySelector(".button-draw");
    drawButton.classList.remove("fixed"); // Remover la clase para devolverlo a su lugar original

    // Volver a mostrar la lista de amigos sin la clase 'compact'
    document.getElementById("listaAmigos").classList.remove("compact");

    // Resetear el estado del botón de "Sortear Amigo"
    document.getElementById("continuar-container").style.display = "none"; // Ocultar el botón continuar
    document.getElementById("audio-controls").style.display = "none"; // Ocultar controles de audio

    // Mostrar de nuevo el botón de "Sortear Amigo"
    const sortearButton = document.querySelector(".button-draw");
    sortearButton.style.display = "inline-block"; // Mostrar el botón de nuevo
}

