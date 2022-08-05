let italianos = [
    'Maseratti', 'Pagani',
    'Larmborghini', 'Ferrari',
    'Alfa Romeo', 'Bertone',
    'Bugatti', 'Lancia',
    'Fiat', 'Mazzanti',
    'Fornassari', 'Abarth'
];
let urls = [
    'https://www.maserati.com',
    'https://www.pagani.com',
    'https://www.lamborghini.com',
    'https://www.ferrari.com/es-ES',
    'https://www.alfaromeo.com',
    'http://www.bertone.it',
    'https://www.bugatti.com',
    'https://www.lancia.com',
    'https://www.fiat.com',
    'https://mazzantiautomobili.it',
    'http://www.fornasaricars.com',
    'http://www.abarth.com'
];
let cantidad = italianos.length;
document.write('<ul>');
for( let i = 0; i < cantidad; i++ )
{
    document.write('<li class="italianos">');
    document.write('<a href="'+ urls[i] +'" target="_blank">');
    document.write( italianos[i] );
    document.write('</a>');
    document.write('</li>');
}
document.write('</ul>');