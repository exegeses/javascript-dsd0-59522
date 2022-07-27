//ubicar elemento/s dentro del DOM
let redbull = document.getElementById('redbull');
let ferrari = document.getElementById('ferrari');
let mercedes = document.getElementById('mercedes');
let mclaren = document.getElementById('mclaren');

/* estado inicial  (ocultar) */
ferrari.style.display = 'none';
mercedes.style.display = 'none';
mclaren.style.display = 'none';

//declaramos funcion/es de control
function showHide( team )
{
    redbull.style.display = 'none';
    ferrari.style.display = 'none';
    mercedes.style.display = 'none';
    mclaren.style.display = 'none';
    if ( team == 'redbull' ){
        redbull.style.display = 'flex';
    }
    else if( team == 'ferrari' ){
        ferrari.style.display = 'flex';
    }
    else if( team == 'mercedes' ){
        mercedes.style.display = 'flex';
    }
    else if( team == 'mclaren' ){
        mclaren.style.display = 'flex';
    }
}