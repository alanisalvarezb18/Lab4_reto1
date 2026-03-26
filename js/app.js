function saludar() {
    var nombre = document.getElementById("nombre").value;

    if (nombre === "") {
        alert("Por favor escribe tu nombre");
    } else {
        document.getElementById("mensaje").innerText = "¡Hola " + nombre + "! Bienvenido 😄";
    }
}