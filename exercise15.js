// Guardar los siguientes datos del usuario
/**
 * Nombre
 * Apellido
 * Edad
 * Telefono
 * Celular
 * Direccion
 */

const btnuser = document.getElementById("btnUser");
const welcome = document.getElementById("welcome");

const userData = () => {
  let name = prompt("Ingresa tu nombre");
  let lastname = prompt("Ingresa tu apellido");
  let age = prompt("Ingresa tu edad");
  let phone = prompt("Ingresa tu número telefonico");
  let cellphone = prompt("Ingresa tu número celular");
  let address = prompt("Ingresa tu dirección");
  welcome.innerHTML =
    "Bienvenido/a : " +
    name +
    lastname +
    ", Tu edad: " +
    age +
    ", Telefono fijo: " +
    phone +
    ", Numero celular: " +
    cellphone +
    ", Dirección: " +
    address;
  localStorage.setItem("nombre", name);
  localStorage.setItem("apellido", lastname);
  localStorage.setItem("edad", age);
  localStorage.setItem("phone", phone);
  localStorage.setItem("cellphone", cellphone);
  localStorage.setItem("add", address);
};

if (
  localStorage.getItem("nombre", "apellido", "edad", "phone", "Cell", "add")
) {
  welcome.innerHTML =
    "Bienvenido/a : " +
    localStorage.getItem("nombre") +
    localStorage.getItem("apellido") +
    ", Tu edad: " +
    localStorage.getItem("edad") +
    ", Telefono fijo: " +
    localStorage.getItem("phone") +
    ", Numero celular: " +
    localStorage.getItem("cellphone") +
    ", Dirección es: " +
    localStorage.getItem("add");
}

//evento
btnUser.onclick = function () {
  userData();
};
