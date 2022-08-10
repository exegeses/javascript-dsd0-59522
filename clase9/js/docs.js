let arr1 = ['a', 'b', 'c', 'd', 'e'];
const txt = document.querySelector('#txt');
const txt2 = document.querySelector('#txt2');

if( txt ){
    txt.innerText = arr1[0] + arr1[1];
}
if ( txt2 ){
    txt2.innerText = arr1[2] + arr1[3] + arr1[4];
}