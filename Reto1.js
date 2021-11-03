const btUser = document.getElementById("btUser");
const welcome = document.getElementById("welcome");
const sueldo = document.getElementById("sueldo");


const userData =() => {
    let userName = prompt("Nombre");
    let salario = prompt( "Sueldo");
    let basico = parseInt(salario);
    console.log(basico);
    welcome.innerHTML = "Hola: " + userName;
    sueldo.innerHTML =  "Tu sueldo es: " + basico;
}


btUser.onclick = function () {
    userData();
}