"use strict";

const img = [];
const slider = document.getElementById('image-container');

for (let i = 0; i <= 4; i++) {
    img[i] = `img/0${i+1}.jpg`;
}

console.log(img);

for (let i = 0; i < img.length; i++) {
    const divCreation =`<div class="slide"> 
                            <img src="${img[i]}" alt="">
                        </div>`;
    slider.append(divCreation)
}

document.querySelector('.slide').classList.add('active');

let active = 0;

const up = document.getElementById('arrow-up');
const down = document.getElementById('arrow-down');



// up.addEventListener('click', function(){

// });

// down.addEventListener('click', function(){

// });

