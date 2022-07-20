/*
* mostrar la fecha actual
* formato:  20/07/2022 
*/

//ubicar elemento dentro del DOM
let txt = document.getElementById('txt');

//creamos un objeto de fecha
let fecha = new Date();

//obtenemos el número del día del mes
let diaMes = fecha.getDate();
//obtenemos el número del mes actual
let mes = fecha.getMonth() + 1; // 0->enero | 1->febrero | 2->marzo
// agregamos 0 inical (dos caractéres)
if( mes < 10 ){
    mes = '0' + mes;
}

//obtenemos el nñumero del añol
let anio = fecha.getFullYear();

//imprimimos en el span
txt.innerText = diaMes +'/'+ mes +'/'+ anio;