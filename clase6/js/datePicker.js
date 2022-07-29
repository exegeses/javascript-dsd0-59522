let fechaUsuario = document.querySelector('#fecha');
let salida = document.querySelector('#salida');

function getFechaUsuario()
{
    let valor = fechaUsuario.value;
    salida.innerText = valor;
    let convertido = valor.substring(0,4) +','+ valor.substring( 5,7 )+','+valor.substring( 8, 10 );
    console.log(convertido);
}