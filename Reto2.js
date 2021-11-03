const btUser = document.getElementById("btUser");
const welcome = document.getElementById("trasnlate");

const traducir = () => {
  let word = prompt(
    "Escoge unas de las siguientes palabras: \n Casa \n Mesa \n Perro \n Gato \n y te mostraremos su traducción en ingles: " );
  word = word.toLocaleLowerCase();
  switch (word) {
    case "Casa":
      translate.innerHTML = "Su traducción es House";
      break;
    case "Mesa":
      translate.innerHTML = "Su traducción es Table";
      break;
    case "Perro":
      translate.innerHTML = "Su traducción es Dog";
      break;
    case "Gato":
      translate.innerHTML = "Su traducción es Cat";
      break;
    default:
      alert("Error al escoger la palabra");
      break;

  }
}

btUser.onclick = function () {
    traducir();
}
