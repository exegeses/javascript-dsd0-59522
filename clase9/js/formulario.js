//ubicamos elementos dentro del DOM
    //el formulario
const formulario = document.querySelector('#formulario');
    //los campos del form
const campoNombre = document.querySelector('input[name="nombre"]');
const campoEmail = document.querySelector('input[name="email"]');
const campoComentarios = document.querySelector('textarea[name="comentarios"]');
    //los span para los mensajes
const txtNombre = document.querySelector('#txtNombre');
const txtEmail = document.querySelector('#txtEmail');
const txtComentarios = document.querySelector('#txtComentarios');

//## funciones de validación
formulario.addEventListener( 'submit',
                         function (evento)
     {
         //evitamos envío del form
         evento.preventDefault();
         //borramos mensaje de error
         borrarMensajes();

         let check = true; // flag para envío
         let nombre = campoNombre.value; //contenido dentro del campoNombre
         if ( !checkVacio( nombre ) ){
             //mostramos mensaje de error para nombre
             txtNombre.innerText = 'Complete el campo Nombre.';
             campoNombre.style.border = '1px solid #ff5b6d';
             check = false;
         }

         let email = campoEmail.value; //contenido dentro del campoEmail
         if ( !validarEmail(email) ){
             //mostramos mensaje de error para email
             txtEmail.innerText = 'Complete el campo Email con un email válido.';
             campoEmail.style.border = '1px solid #ff5b6d';
             check = false;
         }

         let comentarios = campoComentarios.value; //contenido dentro del campoComentarios
         if ( !checkVacio( comentarios ) || comentarios.length < 5 ){
            //mostramos mensaje de error en campo comentarios
             txtComentarios.innerText = 'Complete el campo Comentarios con al menos 4 caractéres.';
             campoComentarios.style.border = '1px solid #ff5b6d';
             check = false;
         }

         if( check ){
             //enviamos el formulario
            formulario.submit();
         }

     });

function validarEmail( email )
{
    const expresion = /\S+@\S+\.\S/;
    return expresion.test( email );
}
function checkVacio( valor )
{
    if( valor == '' || valor == null){
        return false;
    }
    return true;
}
function borrarMensajes()
{
    txtNombre.innerText = '';
    txtEmail.innerText = '';
    txtComentarios.innerText = '';
    campoNombre.style.border = 'unset';
    campoEmail.style.border = 'unset';
    campoComentarios.style.border = 'unset';
}