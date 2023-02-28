let a = document.querySelector(`.a_1`);
let as = document.querySelector(`.button`);
let but = document.querySelector(`.but`);

let b = document.querySelector(`.a_2`);
let ab = document.querySelector(`.button_1`);
let but1 = document.querySelector(`.but1`);

let c = document.querySelector(`.a_3`);
let ac = document.querySelector(`.button_2`);
let but2 = document.querySelector(`.but2`);


function myClick() {
    // console.log("myClick");
    if (a.value.toLowerCase() == `Лермонтов`) {
        but.classList.remove(`btn-outline`)
        but.classList.remove(`btn-danger`)
        but.classList.add(`btn-success`)
        but.innerHTML = 'Правильно'
    }
    else {
        but.classList.remove(`btn-outline`)
        but.classList.remove(`btn-success`)
        but.classList.add(`btn-danger`)
        but.innerHTML = 'Неправильно'
    }
}
function my1Click() {
    if (b.value.toLowerCase() == `Грибоедов`) {
        // console.log("my1Click");
        but1.classList.remove(`btn-outline`)
        but1.classList.remove(`btn-danger`)
        but1.classList.add(`btn-success`)
        but1.innerHTML = 'Правильно'
    }
    else {
        but1.classList.remove(`btn-outline`)
        but1.classList.remove(`btn-success`)
        but1.classList.add(`btn-danger`)
        but1.innerHTML = 'Неправильно'
    }
}
function my2Click() {
    // console.log("my2Click");
    if (c.value.toLowerCase() == `Толстой`) {
        but2.classList.remove(`btn-outline`)
        but2.classList.remove(`btn-danger`)
        but2.classList.add(`btn-success`)
        but2.innerHTML = 'Правильно'
    }
    else {
        but2.classList.remove(`btn-outline`)
        but2.classList.remove(`btn-success`)
        but2.classList.add(`btn-danger`)
        but2.innerHTML = 'Неправильно'
    }
}
as.addEventListener(`click`, myClick);
ab.addEventListener(`click`, my1Click);
ac.addEventListener(`click`, my2Click);