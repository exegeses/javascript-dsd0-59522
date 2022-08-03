let n = 1;
while ( n < 15 )
{
    document.write(n + ' hola<br>');
    n++;//n = n + 1;
}
document.write('<hr>');
let italianos = [
    'Maseratti', 'Pagani',
    'Larmborghini', 'Ferrari',
    'Alfa Romeo', 'Bertone',
    'Bugatti', 'Lancia',
    'Fiat', 'Mazzanti',
    'Fornassari', 'Abarth'
];
let i = 0;
document.write('<ul>');
while ( i < italianos.length )
{
    document.write('<li class="italianos">', italianos[i] ,'</li>');
    i++;
}
document.write('</ul>');