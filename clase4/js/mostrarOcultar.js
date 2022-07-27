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

/* propuesta Gus Lineira */
/*let flag = 1;

function mostrarOcultar()
{
    if( flag%2 == 0)
    {
        caja.style.display ='block';
    }
    else{
        caja.style.display = 'none';
    }
    flag++;
}*/


/*
* function mostrarOcultar()
{
    if( flag == 0)
    {
        caja.style.display ='block';
        flag = 1;
    }
    else{
        caja.style.display = 'none';
        flag = 0
    }
}
* */

/* propuesta Carlos Camargo */
/*function mostrarOcultar () {
    if ( caja.style.display === 'none') {
        caja.style.display = 'block';
    } else {
        caja.style.display = 'none';
    }
}
*/

/* propuesta Jhonny Samir */
let visible = true;
function mostrarOcultar(){
    if ( visible == true ) {
        ocultar();
        visible = false;
    }
    else
    {
        mostrar();
        visible = true;
    }
}