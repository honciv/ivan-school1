let btnCheckQ5 = document.querySelector(`#btnCheckQ5`);

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


var question5 = localStorage.getItem("question5");
num = 0
function checkQuestion5() {
	if ((answer1.value.toLowerCase() == '1') || (answer1.value.toLowerCase() == 'тыквы') || (answer1.value.toLowerCase() == 'из тыквы')) {
		btnQ1.classList.remove(`btn-outline`)
		btnQ1.classList.remove(`btn-danger`)
		btnQ1.classList.add(`btn-success`)
		btnQ1.innerHTML = 'Правильно'
        num++
        localStorage.setItem('question5', num);
				questionSum();
	}
	else {
		btnQ1.classList.remove(`btn-outline`)
		btnQ1.classList.remove(`btn-success`)
		btnQ1.classList.add(`btn-danger`)
		btnQ1.innerHTML = 'Неправильно'
	}

	if (answer2.value.toLowerCase() == '3') {
		btnQ2.classList.remove(`btn-outline`)
		btnQ2.classList.remove(`btn-danger`)
		btnQ2.classList.add(`btn-success`)
		btnQ2.innerHTML = 'Правильно'
        num++
        localStorage.setItem('question5', num);
				questionSum();
	}
	else {
		btnQ2.classList.remove(`btn-outline`)
		btnQ2.classList.remove(`btn-success`)
		btnQ2.classList.add(`btn-danger`)
		btnQ2.innerHTML = 'Неправильно'
	}

	if ((answer3.value.toLowerCase() == '2') || (answer3.value.toLowerCase() == 'печи') || (answer3.value.toLowerCase() == 'на печи')) {
		btnQ3.classList.remove(`btn-outline`)
		btnQ3.classList.remove(`btn-danger`)
		btnQ3.classList.add(`btn-success`)
		btnQ3.innerHTML = 'Правильно'
        num++
        localStorage.setItem('question5', num);
				questionSum();
	}
	else {
		btnQ3.classList.remove(`btn-outline`)
		btnQ3.classList.remove(`btn-success`)
		btnQ3.classList.add(`btn-danger`)
		btnQ3.innerHTML = 'Неправильно'
	}

	if ((answer5.value.toLowerCase() == '4') || (answer5.value.toLowerCase() == 'петр')) {
		btnQ5.classList.remove(`btn-outline`)
		btnQ5.classList.remove(`btn-danger`)
		btnQ5.classList.add(`btn-success`)
		btnQ5.innerHTML = 'Правильно'
        num++
        localStorage.setItem('question5', num);
				questionSum();
	}
	else {
		btnQ5.classList.remove(`btn-outline`)
		btnQ5.classList.remove(`btn-success`)
		btnQ5.classList.add(`btn-danger`)
		btnQ5.innerHTML = 'Неправильно'
	}
}

btnCheckQ2.addEventListener(`click`, checkQuestion5);

function checkForm() {
	event.preventDefault();
	return (false);
}