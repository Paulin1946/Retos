const btnuser = document.getElementById("btnUser");

const capital = () => {
  let dep = prompt(
    " \n Coloca el nombre del departamento.\n  "
  );
  dep = dep.toLowerCase();
  if (dep === "tolima") {
    alert("Su capital es Ibagué");
  } else if (dep === "valle") {
    alert("Su capital es Cali");
  } else if (dep === "guajira") {
    alert("Su capital es Riohacha");
  } else if (dep === "magdalena") {
    alert("Su capital es Santa Marta");
  } else if (dep === "cesar") {
    alert("Su capital es Valledupar");
  } else if (dep === "Bolivar") {
    alert("Su capital es Cartagena");
  } else if (dep === "atlantico") {
    alert("Su capital es Barranquilla");
  } else if (dep === "Cordoba") {
    alert("Su capital es Monteria");
  } else if (dep === "Antioquia") {
    alert("Su capital es Medellin");
  } else if (dep === "choco") {
    alert("Su capital es Quibdo");
  } else if (dep === "cauca") {
    alert("Su capital es Popayan");
  } else if (dep === "nariño") {
    alert("Su capital es Pasto");
  } else if (dep === "Caldas") {
    alert("Su capital es Manizales");
  } else if (dep === "risaralda") {
    alert("Su capital es Pereira");
  } else if (dep === "armenia") {
    alert("Su capital es Quindio");
  } else if (dep === "cundinamarca") {
    alert("Su capital es Bogotá");
  } else if (dep === "magdalena") {
    alert("Su capital es Santa Marta");
  } else if (dep === "huila") {
    alert("Su capital es Neiva");
  } else if (dep === "caqueta") {
    alert("Su capital es Florencia");
  } else if (dep === "amazonas") {
    alert("Su capital es Leticia");
  } else if (dep === "putumayo") {
    alert("Su capital es Mocoa");
  } else if (dep === "Santander") {
    alert("Su capital es Bucaramanga");
  } else if (dep === "Norte de santander") {
    alert("Su capital es Cucuta");
  } else if (dep === "arauca") {
    alert("Su capital es Arauca");
  } else if (dep === "Meta") {
    alert("Su capital es Villavicencio");
  } else if (dep === "guania") {
    alert("Su capital es Puerto Inirida");
  } else if (dep === "vichada") {
    alert("Su capital es Puerto Carreño");
  } else if (dep === "vaupes") {
    alert("Su capital es Mitú");
  } else if (dep === "guaviare") {
    alert("Su capital es San Jose");
  } else if (dep === "boyaca") {
    alert("Su capital es Tunja");
  } else if (dep === "casanare") {
    alert("Su capital es Yopal");
  } else if (dep === "magdalena") {
    alert("Su capital es Santa Marta");
  } else if (dep === "sucre") {
    alert("Su capital es Sincelejo");
  } else {
    alert("Datos no validos");
  }
};

btnUser.onclick = function () {
  capital();
};
