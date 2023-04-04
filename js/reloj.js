const diaSemana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado",];

const meses = ["Enero","Febero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre",
];

function obtenerHora() {
  let fecha = new Date();

  let pFecha = document.getElementById("fecha");
  const hora = String(fecha.getHours()).padStart(2, "0");
  const minutos = String(fecha.getMinutes()).padStart(2, "0");
  const segundos = String(fecha.getSeconds()).padStart(2, "0");
  pFecha.innerHTML = `${diaSemana[fecha.getDay()]} ${fecha.getDate()} de ${
    meses[fecha.getMonth()]
  } de ${fecha.getFullYear()}`;

  let pHora = document.getElementById("hora");

  if (fecha.getHours() < 12) {
    pHora.innerHTML = `${hora}:${minutos}:${segundos} AM`;
  } else {
    pHora.innerHTML = `${hora}:${minutos}:${segundos} PM`;
  }
}

setInterval(obtenerHora, 1000);
