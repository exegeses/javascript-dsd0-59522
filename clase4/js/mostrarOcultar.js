//ubicamos elemento/s dentro del DOM
let caja = document.getElementById('caja');
    caja.style.backgroundColor = '#e84fff';

//declarar funcion/es de control
function ocultar()
{
    caja.style.display = 'none';
    //caja.style.visibility = 'hidden';
    //caja.style.opacity = '0';
}
function mostrar()
{
    caja.style.display = 'block';
    //caja.style.visibility = 'visible';
    //caja.style.opacity = '1';
}
