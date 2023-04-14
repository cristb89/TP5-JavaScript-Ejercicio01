let botonComenzar = document.getElementById("boton-comenzar")
let numeroMagico;

function generarNumeroAleatorio() {
    let numeroAleatorio = Math.floor(Math.random() * 10);
    numeroMagico = numeroAleatorio;
    console.log("Número Aleatorio Obtenido: " + numeroAleatorio);
    botonComenzar.disabled = true;
}

function compararNumeros() {
    let numeroDelUsuario = document.getElementById("Numero").value;
    console.log("Número Ingresado Por El Usuario: " + numeroDelUsuario);

    if (parseInt(numeroDelUsuario) === parseInt(numeroMagico)) {
        alert("GANASTE - LOS NUMEROS SON IGUALES");
        botonComenzar.disabled = false;
        botonComenzar.innerHTML = "Volver a Jugar";
    } else {
        alert("PERDISTE - VUELVE A INTENTARLO");
        botonComenzar.disabled = false;
        botonComenzar.innerHTML = "Volver a Jugar";
    }
}