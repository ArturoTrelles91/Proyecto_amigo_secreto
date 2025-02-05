// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

function AsignarTextoElemento(elemento,texto){
 let ElementoHTML =   document.querySelector(elemento);
 ElementoHTML.innerHTML = texto;
 return;
}

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
 
    // Limpiar el input después de agregar
    amigo.value = "";
    
    // Actualizar la lista en la pantalla
    mostrarAmigos();

    return;
}


//Vamos a crear la funcion mostrarAmigos()
//siguiendo el tutorial de: https://codedamn.com/news/javascript/create-new-elements-with-javascript

function mostrarAmigos() {
    // Vamos a obtener la lista <ul>
    let listaul = document.getElementById("listaAmigos"); 


//  Hay que limpiar la lista antes de actualizarla
    listaul.innerHTML = ""; 

    // Recorrer el array amigos y agregar cada nombre como un <li>
    for (let i = 0; i < amigos.length; i++) {

        // Crear un <li>
        let li = document.createElement("li"); 
        // Asignar el nombre
        li.textContent = amigos[i]; 
        // Agregar el elemento <li> a la lista <ul>
        listaul.appendChild(li); 
    }
}


function sortearAmigo(){

    if (amigos.length === 0) {
        alert("Debes agregar al menos un amigo antes de poder sortear.");
        return;
    }

    let AmigoSecreto = amigos[Math.floor(Math.random()*amigos.length)];

// Aqui queremos mostrar el resultado, selecciona el elemento html con el id resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es ${AmigoSecreto}`
    return;
}







