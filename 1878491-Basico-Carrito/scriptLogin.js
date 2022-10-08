var usuarioTXT = document.getElementById("usuario");
var passwordTX = document.getElementById("password");
let btnInicioses = document.querySelector('#inicioses');

console.log(usuarioTXT.value);
console.log(passwordTX.value);

btnInicioses.addEventListener('click', () => btnInicioses.style.backgroundColor = '#c9302c');

function password() {
    console.log(passwordTX.value);
}

function usuario() {
    console.log(usuarioTXT.value);
}

function Respuesta() {
    console.log(usuarioTXT.value);
    console.log(passwordTX.value);
}