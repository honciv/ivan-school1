let btnCheckQ2 = document.querySelector(`#btnCheckQ2`);

let answer1 = document.querySelector(`#answer1`);
let btnQ1 = document.querySelector(`#btnQ1`);

let answer2 = document.querySelector(`#answer2`);
let btnQ2 = document.querySelector(`#btnQ2`);

let answer3 = document.querySelector(`#answer3`);
let btnQ3 = document.querySelector(`#btnQ3`);

let answer4 = document.querySelector(`#answer4`);
let btnQ4 = document.querySelector(`#btnQ4`);

let answer5 = document.querySelector(`#answer5`);
let btnQ5 = document.querySelector(`#btnQ5`);

let answer6 = document.querySelector(`#answer6`);
let btnQ6 = document.querySelector(`#btnQ6`);

let answer7 = document.querySelector(`#answer7`);
let btnQ7 = document.querySelector(`#btnQ7`);
// let as = document.querySelector(`.button`);
// let but = document.querySelector(`.but`);

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

// let b = document.querySelector(`.a_2`);
// let ab = document.querySelector(`.button_1`);
// let but1 = document.querySelector(`.but1`);

// let c = document.querySelector(`.a_3`);
// let ac = document.querySelector(`.button_2`);
// let but2 = document.querySelector(`.but2`);


var question1 = localStorage.getItem("question2");
num = 0


function checkQuestion2() {
  if (answer1.value == '5') {
    btnQ1.classList.remove(`btn-outline`)
    btnQ1.classList.remove(`btn-danger`)
    btnQ1.classList.add(`btn-success`)
    btnQ1.innerHTML = 'Правильно'
    num++
    localStorage.setItem('question2', num);
  }
  else {
    btnQ1.classList.remove(`btn-outline`)
    btnQ1.classList.remove(`btn-success`)
    btnQ1.classList.add(`btn-danger`)
    btnQ1.innerHTML = 'Неправильно'
  }

  if (answer2.value == '6') {
    btnQ2.classList.remove(`btn-outline`)
    btnQ2.classList.remove(`btn-danger`)
    btnQ2.classList.add(`btn-success`)
    btnQ2.innerHTML = 'Правильно'
    num++
    localStorage.setItem('question2', num);
  }
  else {
    btnQ2.classList.remove(`btn-outline`)
    btnQ2.classList.remove(`btn-success`)
    btnQ2.classList.add(`btn-danger`)
    btnQ2.innerHTML = 'Неправильно'
  }

  if (answer3.value == '2') {
    btnQ3.classList.remove(`btn-outline`)
    btnQ3.classList.remove(`btn-danger`)
    btnQ3.classList.add(`btn-success`)
    btnQ3.innerHTML = 'Правильно'
    num++
    localStorage.setItem('question2', num);
  }
  else {
    btnQ3.classList.remove(`btn-outline`)
    btnQ3.classList.remove(`btn-success`)
    btnQ3.classList.add(`btn-danger`)
    btnQ3.innerHTML = 'Неправильно'
  }

  if (answer4.value == '7') {
    btnQ4.classList.remove(`btn-outline`)
    btnQ4.classList.remove(`btn-danger`)
    btnQ4.classList.add(`btn-success`)
    btnQ4.innerHTML = 'Правильно'
    num++
    localStorage.setItem('question2', num);
  }
  else {
    btnQ4.classList.remove(`btn-outline`)
    btnQ4.classList.remove(`btn-success`)
    btnQ4.classList.add(`btn-danger`)
    btnQ4.innerHTML = 'Неправильно'
  }

  if (answer5.value == '3') {
    btnQ5.classList.remove(`btn-outline`)
    btnQ5.classList.remove(`btn-danger`)
    btnQ5.classList.add(`btn-success`)
    btnQ5.innerHTML = 'Правильно'
    num++
    localStorage.setItem('question2', num);
  }
  else {
    btnQ5.classList.remove(`btn-outline`)
    btnQ5.classList.remove(`btn-success`)
    btnQ5.classList.add(`btn-danger`)
    btnQ5.innerHTML = 'Неправильно'
  }

  if (answer6.value == '4') {
    btnQ6.classList.remove(`btn-outline`)
    btnQ6.classList.remove(`btn-danger`)
    btnQ6.classList.add(`btn-success`)
    btnQ6.innerHTML = 'Правильно'
    num++
    localStorage.setItem('question2', num);
  }
  else {
    btnQ6.classList.remove(`btn-outline`)
    btnQ6.classList.remove(`btn-success`)
    btnQ6.classList.add(`btn-danger`)
    btnQ6.innerHTML = 'Неправильно'
  }

  if (answer7.value == '1') {
    btnQ7.classList.remove(`btn-outline`)
    btnQ7.classList.remove(`btn-danger`)
    btnQ7.classList.add(`btn-success`)
    btnQ7.innerHTML = 'Правильно'
    num++
    localStorage.setItem('question2', num);
  }
  else {
    btnQ7.classList.remove(`btn-outline`)
    btnQ7.classList.remove(`btn-success`)
    btnQ7.classList.add(`btn-danger`)
    btnQ7.innerHTML = 'Неправильно'
  }
}


btnCheckQ2.addEventListener(`click`, checkQuestion2);