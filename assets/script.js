var startingPageEl = document.querySelector("#starting-page");
var questionEl = document.querySelector("#question");

var startQuiz = function (event) {
    startingPageEl.setAttribute("style", "color: white;");
    console.log("hello");

var questionOne = document.createElement("h2");
questionOne.innerHTML = "Question One";
questionEl.appendChild(questionOne);

var questionChoice = document.createElement("li");
questionChoice.innerHTML = "First Answer";
questionEl.appendChild(questionChoice);

var questionChoice2 = document.createElement("li");
questionChoice2.innerHTML = "Second Answer";
questionEl.appendChild(questionChoice2);

var questionChoice3 = document.createElement("li");
questionChoice3.innerHTML = "Third Answer"
questionEl.appendChild(questionChoice3);

var questionChoice4 = document.createElement("li");
questionChoice4.innerHTML = "Fourth Answer"
questionEl.appendChild(questionChoice4);

}




startingPageEl.addEventListener("click", startQuiz);