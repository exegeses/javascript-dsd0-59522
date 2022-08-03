/*
let marca1 = 'Hermes';
let marca2 = 'Zara';
let marca3 = 'Boss';
let marca4 = 'Aeropostale';
let marca5 = 'Tommy';
let marca6 = 'Hollister';
 */
let marcas = [
                'Hermes',
                'Zara',
                'Boss',
                'Aeropostale',
                'Tommy',
                'Hollister'
            ];
//let marcas = new Array('Hermes', 'Zara', 'Boss', 'Aeropostale', 'Tommy', 'Hollister');
console.log(marcas);
//imprimimos array dentro del documento
document.write(marcas);
document.write('<br>');
document.write(marcas[2]);
//mostrar el día de la semana
let fecha = new Date();
let nDiaSemana = fecha.getDay();// 0->Dom, 1->Lun, 2->Mar
document.write('<br>');
document.write(nDiaSemana);
document.write('<br>');
switch  ( nDiaSemana ) {
    case 0:
        document.write('Domingo');
        break;
    case 1:
        document.write('Lunes');
        break;
    case 2:
        document.write('Martes');
        break;
    case 3:
        document.write('Miércoles');
        break;
    case 4:
        document.write('Jueves');
        break;
    case 5:
        document.write('Viernes');
        break;
    case 6:
        document.write('Sábado');
        break;
}
document.write('<br>');
let semana = [
                'Domingo', 'Lunes', 'Martes',
                'Miércoles', 'Jueves', 'Viernes',
                'Sábado'
             ];
document.write( semana[nDiaSemana] );
