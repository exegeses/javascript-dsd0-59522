//ubicamos elementos dentro del DOM
let txtDias = document.querySelector('#txtDias');
let txtHoras = document.querySelector('#txtHoras');
let txtMinutos = document.querySelector('#txtMinutos');
let txtSegundos = document.querySelector('#txtSegundos');

//declaramos función de control
function cuentaRegresiva()
{
    //objetos de fecha
    let ahora = new Date();
    let final = new Date( 2022, 10, 21, 7 );
    //conversión a unix timestamp
    // tiempo transcurrido en milisegundos desde el 1º de enero de 1970
    let actual = ahora.getTime();
    let evento = final.getTime();
    //diferencia entre fechas
    let diferencia = evento - actual;

    //obtenemos el tiempo en segundos, minutos, horas, dias
    let segundos = Math.trunc( diferencia/1000 );
        console.log(segundos);
    let minutos = Math.trunc( segundos/60 );
        console.log(minutos);
    let horas = Math.trunc( minutos/60 );
        console.log(horas);
    let dias = Math.trunc( horas/24 );
        console.log(dias);

    //calculamos eel tiempo sobrante
    // en horas, minutos, segundos
    horas = horas%24;
    minutos = minutos%60;
    segundos = segundos%60;

    // 0 (ceros iniciales)
    if (horas <10){
        horas = '0' + horas
    }
    if (minutos <10){
        minutos = '0' + minutos
    }
    if (segundos <10){
        segundos = '0' + segundos
    }

    //imrimimos en el HTML
    txtDias.innerText = dias;
    txtHoras.innerText = horas;
    txtMinutos.innerText = minutos;
    txtSegundos.innerText = segundos;
}

//invocamos la función
cuentaRegresiva();
setInterval( cuentaRegresiva )