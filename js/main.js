"use strict";

const img = [];
const slider = document.getElementById('image-container');

for (let i = 0; i <= 4; i++) {
    img[i] = `img/0${i+1}.jpg`;
}

console.log(img);

for (let i = 0; i < img.length; i++) {
    const divCreation = document.createElement(`div`);
    divCreation.classList.add('slide');
    divCreation.innerHTML = `<img src="${img[i]}" alt="">`;
    slider.append(divCreation);
}

document.querySelector('.slide').classList.add('active');

let active = 0;

const up = document.getElementById('arrow-up');
const down = document.getElementById('arrow-down');
var elements = document.getElementsByClassName("slide");

up.addEventListener('click', function(){
    elements[active].classList.remove('active');
    if(active===img.length - 1){
        active = 0;
    }else{
        active++;
    }
    elements[active].classList.add('active');
});

down.addEventListener('click', function(){
    elements[active].classList.remove('active');
    if(active===0){
        active = img.length - 1;
    }else{
        active--;
    }
    elements[active].classList.add('active');
});


