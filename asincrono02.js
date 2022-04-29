var textoTitulo1 = document.querySelector("h1");

textoTitulo1.textContent = "Nuevo texto del título, V2.0";  

textoTitulo1.innerHTML = "<p>Este es un nuevo párrafo que reemplazó al título V 2.0</p>"; // con este método, el nuevo párrafo queda dentro del tag h1 original

var parrafoExtra = document.createElement("p");

parrafoExtra.textContent = "Este es un párrafo extra creado con createElement + textContent";

document.body.appendChild(parrafoExtra);