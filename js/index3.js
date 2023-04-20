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
    if (current > to) {
      setTimeout(go, 1000);
    }
    current--;
  }, 1000);
}

// использование:
printNumbers(540, 1);

// let b = document.querySelector(`.a_2`);
// let ab = document.querySelector(`.button_1`);
// let but1 = document.querySelector(`.but1`);

// let c = document.querySelector(`.a_3`);
// let ac = document.querySelector(`.button_2`);
// let but2 = document.querySelector(`.but2`);


var question3 = localStorage.getItem("question3");
num = 0


function checkQuestion2() {
  if (answer1.value == '2') {
    btnQ1.classList.remove(`btn-outline`)
    btnQ1.classList.remove(`btn-danger`)
    btnQ1.classList.add(`btn-success`)
    btnQ1.innerHTML = 'Правильно'
    num++
    localStorage.setItem('question3', num);
    questionSum();
  }
  else {
    btnQ1.classList.remove(`btn-outline`)
    btnQ1.classList.remove(`btn-success`)
    btnQ1.classList.add(`btn-danger`)
    btnQ1.innerHTML = 'Неправильно'
  }

  if (answer2.value == '1') {
    btnQ2.classList.remove(`btn-outline`)
    btnQ2.classList.remove(`btn-danger`)
    btnQ2.classList.add(`btn-success`)
    btnQ2.innerHTML = 'Правильно'
    num++
    localStorage.setItem('question3', num);
    questionSum();
  }
  else {
    btnQ2.classList.remove(`btn-outline`)
    btnQ2.classList.remove(`btn-success`)
    btnQ2.classList.add(`btn-danger`)
    btnQ2.innerHTML = 'Неправильно'
  }

  if (answer3.value == '4') {
    btnQ3.classList.remove(`btn-outline`)
    btnQ3.classList.remove(`btn-danger`)
    btnQ3.classList.add(`btn-success`)
    btnQ3.innerHTML = 'Правильно'
    num++
    localStorage.setItem('question3', num);
    questionSum();
  }
  else {
    btnQ3.classList.remove(`btn-outline`)
    btnQ3.classList.remove(`btn-success`)
    btnQ3.classList.add(`btn-danger`)
    btnQ3.innerHTML = 'Неправильно'
  }

  if (answer4.value == '3') {
    btnQ4.classList.remove(`btn-outline`)
    btnQ4.classList.remove(`btn-danger`)
    btnQ4.classList.add(`btn-success`)
    btnQ4.innerHTML = 'Правильно'
    num++
    localStorage.setItem('question3', num);
    questionSum();
  }
  else {
    btnQ4.classList.remove(`btn-outline`)
    btnQ4.classList.remove(`btn-success`)
    btnQ4.classList.add(`btn-danger`)
    btnQ4.innerHTML = 'Неправильно'
  }
}
btnCheckQ2.addEventListener(`click`, checkQuestion2);