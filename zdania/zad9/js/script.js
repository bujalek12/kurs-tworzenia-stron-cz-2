const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('.btn2');

console.log(btn1, btn2);

function handleClick() {
    console.log('kliknieto przycisk nr 1');
}

function addNumbers() {
    console.log(2+2);
}


btn1.addEventListener('click', handleClick);
btn2.addEventListener('click', addNumbers);
