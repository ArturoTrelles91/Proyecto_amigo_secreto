```md
# Proyecto "Amigo Secreto" 

## Descripción  del proyecto
Este proyecto es un sistema que permite a los usuarios agregar nombres a una lista de amigos y luego sortear al azar un "Amigo Secreto". Fue desarrollado en **JavaScript** y manipula el **DOM** para actualizar dinámicamente la lista de participantes y mostrar el resultado del sorteo.  

El objetivo de este desafío es mejorar las habilidades en lógica de programación y la manipulación de arreglos en JavaScript.  

---

## Describe Funcionalidades  
✅ Permite agregar nombres a una lista de amigos.  
✅ Evita agregar nombres duplicados.  
✅ Muestra la lista actualizada en pantalla.  
✅ Sortea un amigo secreto al azar.  
✅ Muestra el resultado en la interfaz.  

---

## Listando Archivos principales  
- `index.html` → Contiene la estructura HTML de la aplicación.  
- `app.js` → Implementa la lógica de agregar amigos y realizar el sorteo.  
- `style.css` → Contiene los estilos de la interfaz (opcional).  

---

## Instalación y ejecución del código
1. Descarga o clona este repositorio.  
2. Abre el archivo **`index.html`** en cualquier navegador.  
3. Escribe un nombre en el campo de texto y presiona "Añadir".  
4. Cuando hayas agregado todos los nombres, presiona "Sortear amigo".  
5. El resultado aparecerá en pantalla.  

---

## Código principal y funciones

### `agregarAmigo()`  
Esta función:  
- Obtiene el nombre ingresado en el campo de texto.  
- Valida que el campo no esté vacío.  
- Evita nombres repetidos en la lista.  
- Agrega el nombre al arreglo y actualiza la lista en pantalla.  

```javascript
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
```

### funcion`mostrarAmigos()`  
Esta función:  
- Obtiene la lista HTML donde se mostrarán los nombres.  
- Limpia la lista antes de actualizarla.  
- Crea elementos `<li>` y los agrega a la lista de manera dinámica.  

```javascript
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
```

### funcion `sortearAmigo()`  
Esta función:  
- Verifica que haya al menos un nombre en la lista.  
- Genera un índice aleatorio y selecciona un nombre.  
- Muestra el resultado en pantalla.  

```javascript
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
```

---

## Pruebas y mejoras futuras  

### Pruebas actuales  
- **Prueba 1**: Agregar nombres y compararlos con la lista.  
- **Prueba 2**: Uso de *template strings* para mostrar el resultado.  
- **Prueba 3**: Se planea agregar un bucle para repetir el sorteo si el usuario lo desea.  

### Posibles mejoras  
- Agregar opción para eliminar nombres de la lista.  
- Estilizar mejor la interfaz con **CSS**.  
- Implementar un botón para reiniciar la lista.  
- Permitir exportar la lista de amigos en un archivo de texto.  

---

## Autor :Arturo Trelles.
Este proyecto fue desarrollado como parte de un desafío de programación en JavaScript para AluraOne, con el objetivo de mejorar habilidades en lógica y manipulación del **DOM**.   
```
