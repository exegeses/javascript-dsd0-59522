let txt = document.getElementById('txt');

/* 11:39:26 */
function reloj()
{
    //creamos objeto de fecha
    let fecha = new Date();

    //obtenemos las horas
    let horas = fecha.getHours();
    //obtenemos los minutos
    let minutos = fecha.getMinutes();
    if (minutos < 10){
        minutos = '0' + minutos;
    }
    //obtenemos los segundos
    let segundos = fecha.getSeconds();
    if ( segundos < 10 ){
        segundos = '0'+ segundos;
    }

    //imprimimos en el span
    txt.innerText = horas + ':' + minutos + ':' + segundos;
}

//invocamos función reloj()
reloj();
//actualizamos el llamadfo a reloj() con delay
setInterval( reloj, 1000 );