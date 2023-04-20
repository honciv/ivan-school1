localStorage.setItem('question1', 0);
localStorage.setItem('question2', 0);
localStorage.setItem('question3', 0);
localStorage.setItem('question4', 0);
localStorage.setItem('question5', 0);
localStorage.serItem('Total', 0)
let totalSum = document.querySelector(`#totalSum`);

var question1 = localStorage.getItem("question1");


totalSum.innerHTML = question1;