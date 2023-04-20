let a = document.querySelector(`.a_1`);
let as = document.querySelector(`.button`);
let but = document.querySelector(`.but`);

let b = document.querySelector(`.a_2`);
let ab = document.querySelector(`.button_1`);
let but1 = document.querySelector(`.but1`);

let c = document.querySelector(`.a_3`);
let ac = document.querySelector(`.button_2`);
let but2 = document.querySelector(`.but2`);


let timeSec = document.querySelector(`#timeSec`);
let totalSum = document.querySelector(`#totalSum`);

function printNumbers(from, to) {
  let current =  from
  setTimeout(function go() {
    if (current == 1){
      window.location.href = 'next.html';
    }
    if (current < 60){
      timeSec.innerHTML = "Осталось " + current + 'сек';
    }
    else{
      timeSec.innerHTML = "Осталось " + Math.floor(current/60) + 'мин';
    }
    console.log(current);
    if (current > to) {
      setTimeout(go, 1000);
    }
    current--;
  }, 1000);
}

// использование:
printNumbers(69, 1);

// Set item
// localStorage.setItem('myCat', 1);

//Get item
// localStorage.setItem('question2', 0);

// var question2 = localStorage.getItem("question2");

var question1 = localStorage.getItem("question1");

num = 0

//Remove item
// localStorage.removeItem("lastname");

//Remove all items
// localStorage.clear();
function myClick() {
    // console.log("myClick");
    if (a.value.toLowerCase() == `лермонтов`) {
        but.classList.remove(`btn-outline`)
        but.classList.remove(`btn-danger`)
        but.classList.add(`btn-success`)
        but.innerHTML = 'Правильно'
        num++
        localStorage.setItem('question1', num);
    }
    else {
        but.classList.remove(`btn-outline`)
        but.classList.remove(`btn-success`)
        but.classList.add(`btn-danger`)
        but.innerHTML = 'Неправильно'
    }
}
function my1Click() {
    if (b.value.toLowerCase() == `грибоедов`) {
        // console.log("my1Click");
        but1.classList.remove(`btn-outline`)
        but1.classList.remove(`btn-danger`)
        but1.classList.add(`btn-success`)
        but1.innerHTML = 'Правильно'
        num++
        localStorage.setItem('question1', num);
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
    if (c.value.toLowerCase() == `толстой`) {
        but2.classList.remove(`btn-outline`)
        but2.classList.remove(`btn-danger`)
        but2.classList.add(`btn-success`)
        but2.innerHTML = 'Правильно'
        num++
        localStorage.setItem('question1', num);
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