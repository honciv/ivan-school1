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

function checkQuestion5() {
	if ((answer1.value.toLowerCase() == 'тыква') || (answer1.value.toLowerCase() == 'тыквы') || (answer1.value.toLowerCase() == 'из тыквы')) {
		btnQ1.classList.remove(`btn-outline`)
		btnQ1.classList.remove(`btn-danger`)
		btnQ1.classList.add(`btn-success`)
		btnQ1.innerHTML = 'Правильно'
	}
	else {
		btnQ1.classList.remove(`btn-outline`)
		btnQ1.classList.remove(`btn-success`)
		btnQ1.classList.add(`btn-danger`)
		btnQ1.innerHTML = 'Неправильно'
	}

	if (answer2.value.toLowerCase() == 'мозги') {
		btnQ2.classList.remove(`btn-outline`)
		btnQ2.classList.remove(`btn-danger`)
		btnQ2.classList.add(`btn-success`)
		btnQ2.innerHTML = 'Правильно'
	}
	else {
		btnQ2.classList.remove(`btn-outline`)
		btnQ2.classList.remove(`btn-success`)
		btnQ2.classList.add(`btn-danger`)
		btnQ2.innerHTML = 'Неправильно'
	}

	if ((answer3.value.toLowerCase() == 'печь') || (answer3.value.toLowerCase() == 'печи') || (answer3.value.toLowerCase() == 'на печи')) {
		btnQ3.classList.remove(`btn-outline`)
		btnQ3.classList.remove(`btn-danger`)
		btnQ3.classList.add(`btn-success`)
		btnQ3.innerHTML = 'Правильно'
	}
	else {
		btnQ3.classList.remove(`btn-outline`)
		btnQ3.classList.remove(`btn-success`)
		btnQ3.classList.add(`btn-danger`)
		btnQ3.innerHTML = 'Неправильно'
	}

	if ((answer4.value.toLowerCase() == 'бейкер-стрит 221-б') || (answer4.value.toLowerCase() == 'Бейкер-стрит 221-Б') || (answer4.value.toLowerCase() == 'Бейкер-Стрит 221-Б')) {
		btnQ4.classList.remove(`btn-outline`)
		btnQ4.classList.remove(`btn-danger`)
		btnQ4.classList.add(`btn-success`)
		btnQ4.innerHTML = 'Правильно'
	}
	else {
		btnQ4.classList.remove(`btn-outline`)
		btnQ4.classList.remove(`btn-success`)
		btnQ4.classList.add(`btn-danger`)
		btnQ4.innerHTML = 'Неправильно'
	}

	if ((answer5.value.toLowerCase() == 'петр гринев') || (answer5.value.toLowerCase() == 'петр')) {
		btnQ5.classList.remove(`btn-outline`)
		btnQ5.classList.remove(`btn-danger`)
		btnQ5.classList.add(`btn-success`)
		btnQ5.innerHTML = 'Правильно'
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