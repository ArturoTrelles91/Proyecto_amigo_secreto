// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

// Vamos a definir un numero aleatorio que despues vamos a usar para buscar lugares en un arreglo
// Debemos llenar amigos con varios nombres, luego hay que calcular el tamaño del arreglo y usar ese tamaño para generar numeros aleatorios en el rango de 1 a lenght_array

//parseint ?

let amigos = []

function AsignarTextoElemento(elemento,texto){
 let ElementoHTML =   document.querySelector(elemento);
 ElementoHTML.innerHTML = texto;
 return;
}

function agregarAmigo(){
    //alert('Click desde el boton');
 
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
    // Esta parte hay que mejorarla
    amigos.push(nombreDeAmigo);
    AsignarTextoElemento('ul',amigos)

    // Limpiar el input después de agregar
    amigo.value = "";

    return;
}


function sortearAmigo(){

    if (amigos.length === 0) {
        alert("Debes agregar al menos un amigo antes de sortear.");
        return;
    }

    let AmigoSecreto = amigos[Math.floor(Math.random()*amigos.length)];
// Aqui queremos mostrar el resultado, selecciona el elemento html con el id resultado

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es ${AmigoSecreto}`
    return;
}







