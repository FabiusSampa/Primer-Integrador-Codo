const cantNoches = document.getElementById("cantNoches");
const sosSocio = document.getElementById("sosSocio");
const tipoHabitacion = document.getElementById("tipoHabitacion");
const montoReserva = document.getElementById("montoReserva");


function captura(){

    // LO USE PARA VALIDAR TIPO DE VARIABLE Y CONTENIDO DURANTE EL DESARROLLO
    

    console.log(typeof(tipoHabitacion));
    console.log(tipoHabitacion.value);
    console.log(typeof(sosSocio));
    console.log(sosSocio.value);
    console.log(typeof(cantNoches));
    console.log(cantNoches.value);

    const habitacion = parseFloat(tipoHabitacion.value);
    const socio = parseFloat(sosSocio.value);
    const noches = parseFloat(cantNoches.value);



    reserva = habitacion*socio*noches;

    console.log(typeof(reserva));
    console.log(reserva);

    
    montoReserva.innerText = "EL MONTO DE LA RESERVA ES DE € " + reserva
    
    console.log(typeof(montoReserva));
    console.log(montoReserva.value);


}



// console.log(typeof(sosSocio));
// console.log(sosSocio.value);
// console.log(typeof(cantNoches));
// console.log(cantNoches.value);
// console.log(typeof(tipoHabitacion));
// console.log(tipoHabitacion.value);


// alert (" Seleccionó la "+tipoHabitacion+"  por "+cantNoches+" noches.   ¿ Es correcto ?");
// alert (" El costo de la reserva es de :   € "+(tipoHabitacion - (tipoHabitacion*sosSocio))*cantNoches+"   ¿ Acepta la Reserva ?");
// alert(" GRACIAS POR CONFIAR EN NOSOTROS ");