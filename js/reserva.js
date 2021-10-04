const calcularPrecio = (personas, dias, suite) => {
  let precioBasePorNoche;

  switch (suite) {
    case "SIMPLE":
      precioBasePorNoche = 4500;
      break;
    case "DOBLE":
      precioBasePorNoche = 6500;
      break;
    case "DELUXE":
      precioBasePorNoche = 8500;
      break;
    default:
      return false;
  }

  return precioBasePorNoche * parseInt(dias);
};

const armarMensaje = (precio, personas, suite) => {
  if (precio != false) {
    return (
      "El precio final para " +
      personas +
      " personas con habitación " +
      suite +
      " es de $" +
      precio +
      "."
    );
  } else {
    return "Datos invalidos ingresados.";
  }
};

const personas = prompt("Ingrese la cantidad de personas para su estadía");
const dias = prompt("Ingrese la cantidad de dias de su estadía");
const suite = prompt(
  "Ingrese la suite que quiere, opciones: SIMPLE, DOBLE, DELUXE."
);

const precio = calcularPrecio(personas, dias, suite);
const mensaje = armarMensaje(precio, personas, suite);

alert(mensaje);
