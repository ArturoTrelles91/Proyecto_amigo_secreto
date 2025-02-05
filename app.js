// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

// Vamos a definir un numero aleatorio que despues vamos a usar para buscar lugares en un arreglo
// Debemos llenar amigos con varios nombres, luego hay que calcular el tamaño del arreglo y usar ese tamaño para generar numeros aleatorios en el rango de 1 a lenght_array

//parseint ?

let amigos = []
//larreglo  = length(amigos)
//let numeroEnArreglo = Math.floor(Math.random()*larreglo)+1;
//let AmigoSecreto = amigos[numeroEnArreglo]

//let nombreDeAmigos = document.querySelector('h2');
//nombreDeAmigos.innerHTML = 'Agrega Nombres de Amigos';

///let numeroEnArreglo = generaNumeroEnArreglo();
//console.log(numeroEnArreglo);

function AsignarTextoElemento(elemento,texto){
 let ElementoHTML =   document.querySelector(elemento);
 ElementoHTML.innerHTML = texto;
 return;
}

function agregarAmigo(){
    //alert('Click desde el boton');
    //let nombreDeAmigo = document.querySelector('input');
    let nombreDeAmigo = document.getElementById("amigo").value;
    
    if (nombreDeAmigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    amigos.push(nombreDeAmigo);
    AsignarTextoElemento('ul',amigos)
    //console.log(nombreDeAmigo);
    //console.log(amigos)
    //console.log(amigos.length);
    return;
}


function sortearAmigo(){
    let AmigoSecreto = amigos[Math.floor(Math.random()*amigos.length)];
    AsignarTextoElemento('h2',AmigoSecreto)
    return;
}
//agregarAmigo();
//let numeroAmigos = amigos.length;


//function generaNumeroEnArreglo(){
//    return Math.floor(Math.random()*numeroAmigos)+1;
//}

//AsignarTextoElemento('ul',amigos)
//AsignarTextoElemento('h2','Prueba2')






