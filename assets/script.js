var startingPageEl = document.querySelector("#starting-page");
var questionEl = document.querySelector("#question");

var startQuiz = function (event) {
    startingPageEl.setAttribute("style", "color: white;");
    console.log("hello");

var questionOne = document.createElement("h2");
questionOne.innerHTML = "Question One";
questionEl.appendChild(questionOne);

var li1 = document.createElement("li");
var button1 = document.createElement("button");
button1.innerHTML = "First Answer";
li1.appendChild(button1);
questionEl.appendChild(li1);

var li2 = document.createElement("li");
var button2 = document.createElement("button");
button2.innerHTML = "Second Answer";
li2.appendChild(button2);
questionEl.appendChild(li2);

var li3 = document.createElement("li");
var button3 = document.createElement("button");
button3.innerHTML = "Third Answer";
li3.appendChild(button3);
questionEl.appendChild(li3);

var li4 = document.createElement("li");
var button4 = document.createElement("button");
button4.innerHTML = "Fourth Answer";
li4.appendChild(button4);
questionEl.appendChild(li4);

}




startingPageEl.addEventListener("click", startQuiz);