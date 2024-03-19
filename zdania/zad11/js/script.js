const arrowIcon = document.querySelector('.fas');
const btn = document.querySelector('.arrow');
const ing = document.querySelector('.item1');


function showItem(){
    ing.classList.toggle('show');

    if(ing.classList.contains('show')){
        arrowIcon.style.transform = 'rotate(180deg)';
    }else{
        arrowIcon.style.transform = 'rotate(0deg)';
    }
}


btn.addEventListener('click', showItem);