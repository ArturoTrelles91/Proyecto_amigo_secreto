<h1>Sistema de Registro para el proyecto amigo secreto</h1>

- Estado del proyecto: En construcción.

Para ejecutar el sistema debes poner ```npm install react```

- Prueba github

- Prueba 1: Consiste en poner un nombre y comparar con el nombre del amigo secreto en "amigos"
- Prueba 2: Se utilizan template strings para remarcar la respuesta cuando se ha acertado
- Prueba 3: Se agrega un ciclo while para que el juego comience cada vez que se falle.  No va a mandar un mensaje, si acertamos (Hay que corregir este error)


Idea: si son puros nombres, tratarlos como strings, algo que sea diferente de un string o que sea vacio, descartarlo

Idea: Una vez que se llene el arreglo amigos 
tomar su posicion en el arreglo por ejemplo de 0 a 9 (10 numeros)
y usar un numero aleatorio para tomar el nombre que tenga ese numero aleatorio entero en el arreglo, como nombre de Amigo Secreto


# Amigo Secreto

## Descripción
Este proyecto consiste de un programa en JavaScript que permite al usuario agregar nombres de amigos a una lista y posteriormente realizar un sorteo para seleccionar un "Amigo Secreto" al azar.

El objetivo de este desafío es fortalecer las habilidades en lógica de programación, manipulando arreglos y la interfaz del DOM en el lenguaje JavaScript.

## Funcionalidades
- Agregar nombres a una lista de amigos.
- Evitar nombres duplicados.
- Mostrar la lista actualizada en la interfaz. [Pendiente de ajustes]
- Sortear un nombre al azar de la lista de amigos.
- Mostrar el resultado en pantalla.

## Archivos principales
- `index.html` → Contiene la estructura HTML.
- `app.js` → Contiene la lógica principal en JavaScript.

## Instrucciones de uso
1. **Abrir el archivo `index.html`** en un navegador.
2. **Ingresar un nombre** en el campo de texto y hacer clic en "Añadir".
3. **Repetir el proceso** para agregar más nombres a la lista.
4. **Hacer clic en "Sortear amigo"** para elegir un nombre al azar.
5. **El resultado se mostrará en pantalla**.

## Código principal
### `agregarAmigo()`
Esta función:
- Obtiene el valor ingresado en el campo de texto.
- Valida que el campo no esté vacío.
- Verifica que el nombre no esté repetido en la lista.
- Agrega el nombre a la lista y actualiza la interfaz.

```javascript
function agregarAmigo() {
    let nombreDeAmigo = document.getElementById("amigo").value.trim();
    
    if (nombreDeAmigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    if (amigos.includes(nombreDeAmigo)) {
        alert("Este nombre ya ha sido ingresado. No puedes agregarlo nuevamente.");
        return;
    }
    
    amigos.push(nombreDeAmigo);
    actualizarLista();
}
```

### `sortearAmigo()`
Esta función:
- Verifica si la lista de amigos tiene al menos un nombre.
- Genera un número aleatorio para seleccionar un nombre de la lista.
- Muestra el resultado en pantalla.

```javascript
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debes agregar al menos un amigo antes de sortear.");
        return;
    }

    let AmigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").innerHTML = `El amigo secreto es ${AmigoSecreto}`;
}
```

## Mejoras posibles
- Implementar un botón para eliminar nombres de la lista.
- Agregar estilos con CSS para mejorar la interfaz.
- Permitir la opción de exportar la lista de amigos.
- Añadir una opción para reiniciar la lista y comenzar de nuevo.

## Autor
Proyecto desarrollado como ejercicio para mejorar habilidades en lógica de programación y manipulación del DOM con JavaScript.



