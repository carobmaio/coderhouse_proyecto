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
/* const calcularCosto = (fechaInicio, fechaFin, tipoHabitacion) => {
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
} */

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
/* 
let finalizar = false;
const reservas = []; */

/* while (!finalizar) {
  const fechaInicio = prompt("Ingrese la fecha de llegada (DD/MM/AAAA)");
  const fechaFin = prompt("Ingrese la fecha de salida (DD/MM/AAAA)");
  const personas = parseInt(prompt("Ingrese la cantidad de pasajeros"));
  const habitacion = prompt(
    "Ingrese que habitacion prefiere, opciones: Simple, Doble, Triple o Cuadruple"
  );

  reservas.push(new Reserva(fechaInicio, fechaFin, personas, habitacion));

  finalizar =
    prompt("Desea continuar agregando reservas? Opciones: SI, NO") === "NO";
} */

function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generarNumeroAleatorioDecimal(min, max) {
  return Math.random() * (max - min) + min;
}

const resultados = [
  {
    tipoHabitacion: "Simple",
    precioPorNoche: 4200,
    descripcion: "Habitación simple con vista al Jardín",
    caracteristicas: [
      "Desayuno incluído",
      "1 cama doble",
      "Baño con hidromasaje",
      "Regalo de bienvenida",
    ],
  },
  {
    tipoHabitacion: "Doble",
    precioPorNoche: 5400,
    descripcion: "Habitación doble con vista al montaña",
    caracteristicas: [
      "Desayuno incluído",
      "1 cama doble y 1 simple",
      "Baño con hidromasaje",
      "Vista a la montaña",
      "Regalo de bienvenida",
    ],
  },
  {
    tipoHabitacion: "Triple",
    precioPorNoche: 6800,
    descripcion: "Habitación triple con vista al montaña",
    caracteristicas: [
      "Desayuno incluído",
      "1 cama doble y 3 simples",
      "Baño con hidromasaje",
      "Vista a la montaña",
      "Regalo de bienvenida",
      "PlayStation 5 y TV de 60'",
      "WIFI Gratis",
    ],
  },
  {
    tipoHabitacion: "Cuadruple",
    precioPorNoche: 9900,
    descripcion: "Habitación cuadruple con vista al montaña",
    caracteristicas: [
      "Desayuno incluído",
      "1 cama doble y 3 simples",
      "Baño con hidromasaje",
      "Vista a la montaña",
      "Regalo de bienvenida",
      "PlayStation 5 y TV de 60'",
      "WIFI Gratis",
      "Secador de pelo",
    ],
  },
];

const mostrarResultados = (noches, habitacion) => {
  const habitacionFiltrada = resultados.filter(
    (hab) => hab.tipoHabitacion === habitacion
  );

  const datos = [...habitacionFiltrada];

  for (let i = 0; i < generarNumeroAleatorio(2, 4); i++) {
    const nueva = {
      ...habitacionFiltrada[0],
      precioPorNoche: Math.round(
        habitacionFiltrada[0].precioPorNoche +
          habitacionFiltrada[0].precioPorNoche *
            generarNumeroAleatorioDecimal(0.03, 0.25)
      ),
    };

    datos.push(nueva);
  }

  datos.sort((a, b) => a.precioPorNoche - b.precioPorNoche);

  $("#reserva-resultados").innerHTML = "";

  for (resultado of datos) {
    let caracteristicas = "";

    for (caracteristica of resultado.caracteristicas) {
      caracteristicas += `<li>${caracteristica}</li>`;
    }

    const div = `
    <div class="resultado-reserva">
      <div class="resultado-reserva-header">
        <div class="resultado-reserva-info">
          <h3>Habitación ${resultado.tipoHabitacion}</h3>
          <p>${resultado.descripcion}</p>
        </div>
        <div class="resultado-reserva-precios">
          <p>Precio para ${noches} noches: <span class="precio-final">$ ${
      resultado.precioPorNoche * noches
    }</span></p>

          <span>Precio por noche: $ ${resultado.precioPorNoche}</span>
        </div>
      </div>

      <div class="resultado-reserva-caracteristicas">
        <ul>
          ${caracteristicas}
        </ul>
      </div>

      <button class="reserva-button">Reservar</button>
    </div>
  `;

    $(div).appendTo("#reserva-resultados").slideDown();
  }
};

const calcularDiasEntreDosFechas = (fecha1, fecha2) =>
  Math.abs(
    Math.ceil((fecha1.getTime() - fecha2.getTime()) / (1000 * 3600 * 24))
  );

const inputLlegada = $("#fecha_llegada");
const inputSalida = $("#fecha_salida");
const inputPax = $("#cantidad_pax");
const inputHabitacion = $("#habitacion");

const submitFormulario = (e) => {
  e.preventDefault();

  const fechaInicio = inputLlegada.val();
  const fechaFin = inputSalida.val();
  const cantidadPax = inputPax.val();
  const habitacion = inputHabitacion.val();

  // guardar en el localstorage:

  localStorage.setItem(
    "formData",
    JSON.stringify({
      fechaInicio,
      fechaFin,
      cantidadPax,
      habitacion,
    })
  );

  const dias = calcularDiasEntreDosFechas(
    new Date(fechaInicio),
    new Date(fechaFin)
  );

  mostrarResultados(dias, habitacion);
};

$("#formulario-reserva").on("submit", submitFormulario);

if (localStorage.getItem("formData")) {
  const formData = JSON.parse(localStorage.getItem("formData"));

  inputLlegada.val(formData.fechaInicio);
  inputSalida.val(formData.fechaFin);
  inputPax.val(formData.cantidadPax);
  inputHabitacion.val(formData.habitacion);
}

$(document).on("click", ".reserva-button", function () {
  $(".reserva-form, #reserva-resultados").fadeOut(function () {
    $(".reserva-completa").fadeIn();
  });
});
