/* 
pedir al usuario que ingrese un número
    y a ese número almacenarlo en una variable.

pedir al usuario que ingrese otro número
    y a ese otro número almacenarlo en otra variable.

realizar la suma de esos valores

a ese resultado mostrarlo en el HTML
*/
let num = prompt('Ingrese un número'); 
let num2 = prompt('Ingrese otro número');

let resultado = parseInt( num ) + parseInt( num2 ); 

let txt = document.getElementById('txt');
txt.innerText = 'Total: ' + resultado;