// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

//array para la lista de amigos

let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    inputAmigo.value = "";
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    listaAmigos.innerHTML = ""; 

    amigos.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo secreto y limpiar la lista
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    resultado.innerHTML = `<li> Amigo Secreto: <strong>${amigos[indiceAleatorio]}</strong> </li>`;

    amigos = [];
    actualizarLista();
}
