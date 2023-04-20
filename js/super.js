// считывает оценки
var questionMark1;
var questionMark2;
var questionMark3;
var questionMark4;
var questionMark5;
// все вопросы...

var questionMarkSum;

let totalSum = document.querySelector(`#totalSum`);

// salute
let canvasSalute = document.querySelector(`#canvasWrapper`);
let myCanvas = document.querySelector(`#myCanvas`);

// начальная загрузка
function initialQuestionSet() {
  if (localStorage.getItem("question1")) {
  } else {
    localStorage.setItem("question1", 0);
  }

  if (localStorage.getItem("question2")) {
  } else {
    localStorage.setItem("question2", 0);
  }

  if (localStorage.getItem("question3")) {
  } else {
    localStorage.setItem("question3", 0);
  }

  if (localStorage.getItem("question4")) {
  } else {
    localStorage.setItem("question4", 0);
  }
  if (localStorage.getItem("question5")) {
  } else {
    localStorage.setItem("question5", 0);
  }
  // ... все вопросы
}

// считает тотал
function questionSum() {
  questionMark1 = Number(localStorage.getItem("question1"));
  questionMark2 = Number(localStorage.getItem("question2"));
  questionMark3 = Number(localStorage.getItem("question3"));
  questionMark4 = Number(localStorage.getItem("question4"));
  questionMark5 = Number(localStorage.getItem("question5"));
  // ...

  questionMarkSum =
    questionMark1 +
    questionMark2 +
    questionMark3 +
    questionMark4 +
    questionMark5;

  if (questionMarkSum == 10) {
    showSalute();
    setTimeout(function () {
      canvasSalute.classList.add("canvasOff");
    }, 10000);
    myCanvas.width = window.innerWidth;
    myCanvas.height = window.innerHeight - window.innerHeight / 8;
    canvasSalute.classList.remove("canvasOff");
  }

  totalSum.innerHTML = questionMarkSum;

  console.log("questionMark1", questionMark1);
  console.log("questionMark2", questionMark2);
  console.log("questionMark3", questionMark3);
  console.log("questionMark4", questionMark4);
  console.log("questionMark5", questionMark5);
  console.log("questionMarkSum", questionMarkSum);
}

// загружаем
initialQuestionSet();
questionSum();
