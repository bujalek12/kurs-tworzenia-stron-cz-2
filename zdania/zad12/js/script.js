const sizeUp = document.querySelector('.size-up');
const sizeDown = document.querySelector('.size-down');
const color = document.querySelector('.color');
const p = document.querySelector('p');


let fontSize = 20;

function bigTekst(){
    fontSize +=  5;
    p.style.fontSize = fontSize++ + 'px';
}

function smallTekst(){
    fontSize -= 5;
    p.style.fontSize = fontSize-- + 'px';
}


function changeColor(){
    p.style.color = 'gold';
}


sizeUp.addEventListener('click', bigTekst);
sizeDown.addEventListener('click', smallTekst);
color.addEventListener('click', changeColor);