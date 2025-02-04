// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

// Vamos a definir un numero aleatorio que despues vamos a usar para buscar lugares en un arreglo
// Debemos llenar amigos con varios nombres, luego hay que calcular el tamaño del arreglo y usar ese tamaño para generar numeros aleatorios en el rango de 1 a lenght_array

//parseint ?

let amigos = []
larreglo  = length(amigos)
let numeroEnArreglo = Math.floor(Math.random()*larreglo)+1;
let AmigoSecreto = amigos[numeroEnArreglo]


let intentos = 0;


// Lista de amigos como un array - Se inicializa con = []
// let amigos = []
let amigos = ["Arturo"]
console.log(typeof(amigos))
let AmigoSecreto = prompt("Necesito un nombre para empezar:"); 

if(AmigoSecreto == amigos){
   alert('Acertaste');
   intentos = intentos+1;
  }
   else{
    alert('No acertaste');
    intentos = intentos+1
   }

while(AmigoSecreto != amigos){
    let AmigoSecreto = prompt("Necesito un nombre para sortear:"); 
    if (AmigoSecreto != amigos){
        // La condicion se cumple
        alert('No acertaste');
        intentos = intentos+1;
        } else {
            // La condicion no se cumple
        alert(`Acertaste, el Amigo Secreto es: ${amigos} lo hiciste en ${intentos}`);
        break
    }

    if(intentos >= 5){
        alert('Llegaste al numero maximo de intentos');
        break
    }
   
}    
//console.log(nombreDeUsuario)

