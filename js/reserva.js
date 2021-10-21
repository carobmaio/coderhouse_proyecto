/*
CODIGO EJERCICIO ANTERIOR:

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

*/

//aca se calcularia el costo con el servidor...
const calcularCosto = (fechaInicio, fechaFin, tipoHabitacion) => {
  return 112000;
};

class Reserva {
  constructor(fechaInicio, fechaFin, cantidadPax, tipoHabitacion) {
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.cantidadPax = cantidadPax;
    this.tipoHabitacion = tipoHabitacion;
    this.metodoDePago = null;
    this.estado = "Iniciada";
    this.abonada = false;
    this.costo = calcularCosto(fechaInicio, fechaFin, tipoHabitacion);
  }

  confirmar() {
    this.estado = "Confirmada";
  }

  abonar(metodoPago) {
    this.estado = "Abonada";
    this.metodoDePago = metodoPago;
    this.abonada = true;
  }

  recalcularCosto() {
    this.costo = calcularCosto(
      this.fechaInicio,
      this.fechaFin,
      this.tipoHabitacion
    );
  }

  modificarDia(fechaInicio, fechaFinal) {
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFinal;

    this.recalcularCosto();
  }

  modificarHabitacion(tipoHabitacion) {
    this.tipoHabitacion = tipoHabitacion;

    this.recalcularCosto();
  }

  cancelarReserva() {
    this.estado = "Cancelada";
  }
}

// Al elegir una habitacion luego de la busqueda se va a crear una reserva
/* const reserva = new Reserva("15/03/2022", "25/03/2022", 4, "Cuadruple Deluxe");

// Al hacer click en "Confirmar reserva", se confirmara la misma
reserva.confirmar();

//Luego se mostrara el formulario par pagar la reserva, al pagar se llamara al metodo abonar
reserva.abonar("Tarjeta de crédito");

//Luego el usuario puede modificar dias o habitacion, en cuyo caso se actualizara el costo
reserva.modificarDia("15/03/2022", "27/03/2022");
reserva.modificarHabitacion("Cuadruple Simple");

//Si el usuario desea cancelar la reserva, puede hacerlo con un boton
reserva.cancelarReserva(); */

let finalizar = false;
const reservas = [];

while (!finalizar) {
  const fechaInicio = prompt("Ingrese la fecha de llegada (DD/MM/AAAA)");
  const fechaFin = prompt("Ingrese la fecha de salida (DD/MM/AAAA)");
  const personas = parseInt(prompt("Ingrese la cantidad de pasajeros"));
  const habitacion = prompt(
    "Ingrese que habitacion prefiere, opciones: Simple, Doble, Triple o Cuadruple"
  );

  reservas.push(new Reserva(fechaInicio, fechaFin, personas, habitacion));

  finalizar =
    prompt("Desea continuar agregando reservas? Opciones: SI, NO") === "NO";
}

console.table(reservas);
