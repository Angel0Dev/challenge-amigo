// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Declaración del array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    // Validar entrada
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar nombre al array
    amigos.push(nombreAmigo);

    // Limpiar campo de entrada
    inputAmigo.value = "";

    // Actualizar la lista de amigos en la interfaz
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en la página
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpiar lista

    // Recorrer el array y añadir cada nombre a la lista
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo de manera aleatoria
function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    // Validar si hay amigos en la lista
    if (amigos.length === 0) {
        resultado.textContent = "No hay nombres en la lista para sortear.";
        return;
    }

    // Generar un índice aleatorio y seleccionar el nombre correspondiente
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    // Mostrar el resultado del sorteo
    resultado.textContent = `¡El amigo secreto es: ${amigoSeleccionado}!`;
}
