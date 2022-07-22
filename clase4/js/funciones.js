//ubicamos elemento/s dentro del DOM
let caja = document.getElementById('caja');


/**
 * modificamos atributso pero SIN interactividad
caja.style.backgroundColor = '#f60';
caja.style.color = '#ff0';
caja.innerText = 'naranja';
*/

function cambiar( fondo, texto, color )
{
    /* código de nuestra función */
    caja.style.backgroundColor = fondo;
    caja.style.color = color;
    caja.innerText = texto;
}

function verde()
{
    caja.style.backgroundColor = '#0a4';
    caja.style.color = '#ff0';
    caja.innerText = 'verde';
}