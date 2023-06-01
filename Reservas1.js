// let sosSocio ="N";

let sosSocioNro = 0;

let tipoHabitacion = 0;

let cantidadNoches = 0;

let i=0

// VERIFICAR QUE LA OPCION SEA 1,2 O 3, SINO QUE AVISE QUE LA OPCION ES INVALIDA Y VUELVA A PREGUNTAR

do{
   tipoHabitacion = prompt("¿ Qué tipo de habitación desea ? Ingrese número de opción");
   switch (tipoHabitacion) {
      case "1":
         alert ("Elegiste - Habitacion Doble     - € 20,00.-");
         i=1;
         break;
      case "2":
         alert ("Elegiste - Habitacion Triple     - € 30,00.-");
         i=1;
         break;
      case "3":
         alert ("Elegiste - Habitacion Cuadruple  - € 40,00.-");
         i=1;
         break;
      default:
          alert ("Por favor Ingrese una Opción Correcta");
   }
}while (i==0);


cantidadNoches = prompt("¿ Cuántas noches desea desea reservar ? ");



// ASIGNACION DEL COSTO DE HABITACION

let habitacion = [20,30,40];
let eligio = ["Habitacion Doble","Habitacion Trile","Habitacion Cuádruple"];

// DESCUENTO DE SOCIO


sosSocio = prompt(" ¿ Es socio del MotoClub ?  S / N ");
sosSocio = sosSocio.toUpperCase();


// IF ES SOCIO "S" APLICA EL DESCUENTO


 if(sosSocio == "S"){
    sosSocioNro = 0.8;
     }
     else{
        sosSocioNro = 1;
     }



// VALIDACIONES DE VARIABLES POR CONSOLA

console.log(sosSocio);
console.log(cantidadNoches);
console.log(tipoHabitacion);
console.log(habitacion[tipoHabitacion-1]);
console.log(sosSocioNro);

alert (" Seleccionó la "+tipoHabitacion+"  por "+cantidadNoches+" noches.   ¿ Es correcto ?");
alert (" El costo de la reserva es de :   € "+(((habitacion[tipoHabitacion-1]*sosSocioNro))*cantidadNoches)+"   ¿ Acepta la Reserva ?");
alert(" GRACIAS POR CONFIAR EN NOSOTROS ");