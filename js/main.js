"use strict";
// creo l'aray in cui dovro inserire la stringa con gli src delle immagini
const img = [];
// seleziono il contenitore delle mie immagini
const slider = document.getElementById('image-container');

// popolo  l'array con gli src delle immagini
for (let i = 0; i <= 4; i++) {
    img[i] = `img/0${i+1}.jpg`;
}

console.log(img);

// creo i div in cui andro a inserire le immagini
for (let i = 0; i < img.length; i++) {
    const divCreation = document.createElement(`div`);
    divCreation.classList.add('slide');
    divCreation.innerHTML = `<img src="${img[i]}" alt="">`;
    slider.append(divCreation);
}

// seleziono il primo div e gli attribuisco la classe active
document.querySelector('.slide').classList.add('active');

let active = 0;

const up = document.getElementById('arrow-up');
const down = document.getElementById('arrow-down');

// creo un array contenente tutti i div con classe slide
var elements = document.querySelectorAll('.slide');

// con questa funzione, al click della freccia up rimuovo la classe active all'elemento attivo, creo un ciclo if per azzerare il contatore se siamo sull'ultima foto e poi applico la classe active al successivo elemento
up.addEventListener('click', function(){
    elements[active].classList.remove('active');
    if(active===img.length - 1){
        active = 0;
    }else{
        active++;
    }
    elements[active].classList.add('active');
});

// con questa funzione, al click della freccia up rimuovo la classe active all'elemento attivo, creo un ciclo if per azzerare il contatore se siamo sull'ultima foto e poi applico la classe active al successivo elemento
down.addEventListener('click', function(){
    elements[active].classList.remove('active');
    if(active===0){
        active = img.length - 1;
    }else{
        active--;
    }
    elements[active].classList.add('active');
});


