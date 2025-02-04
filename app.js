// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

// Lista de amigos como un array - Se inicializa con = []


let intentos = 1;

// let AmigoSecreto = prompt("Necesito un nombre para empezar:"); 

// let amigos = []
let amigos = ["Arturo"]

let AmigoSecreto = prompt("Necesito un nombre para empezar:"); 

if(AmigoSecreto == amigos){
   alert('Acertaste');
  }
   else{
    alert('No acertaste');
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
    }
   
}    
//console.log(nombreDeUsuario)

