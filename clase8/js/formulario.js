let formulario = document.querySelector('#formulario');
let campoNombre = document.querySelector('#nombre');
let errNombre = document.querySelector('#errNombre');

//función de validación al hacer submit
formulario.addEventListener(
    'submit',
    function ( evento)
    {
        //evitamos el envío del form
        evento.preventDefault();

        //capturamos el dato "escrito" en el campo nombre
        let nombre = campoNombre.value;
        if ( nombre == '' || nombre == null ){
            //mostramos mensaje de error
            errNombre.innerText = '* complete el campo "Nombre"';
        }
        else{
            //enviamos el formulario
            formulario.submit();
        }
    }
)