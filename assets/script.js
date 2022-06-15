var startingPageEl = document.querySelector("#starting-page");
var pageEl = document.querySelector("#page");
var page2El = document.querySelector("#page2");
var page3El = document.querySelector("#page3");
var page4El = document.querySelector("#page4");
var endingEl = document.querySelector("#ending-page");
var doneEl = document.querySelector("#done");
var questionEl = document.querySelector("#question");
var question2El = document.querySelector("#question2");
var question3El = document.querySelector("#question3");
var question4El = document.querySelector("#question4");
var scoreEl = document.querySelector("#score");



// question 1
var startQuiz = function (event) {
    startingPageEl.setAttribute("style", "display: none;");
    console.log("hello");

var question = document.createElement("h2");
question.innerHTML = "Question One";
questionEl.appendChild(question);

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

//question 2
var answer1 = function (event) {
    pageEl.setAttribute("style", "display: none;");

    var question = document.createElement("h2");
    question.innerHTML = "Question Two";
    question2El.appendChild(question);
    
    var li1 = document.createElement("li");
    var button1 = document.createElement("button");
    button1.innerHTML = "First Answer";
    li1.appendChild(button1);
    question2El.appendChild(li1);
    
    var li2 = document.createElement("li");
    var button2 = document.createElement("button");
    button2.innerHTML = "Second Answer";
    li2.appendChild(button2);
    question2El.appendChild(li2);
    
    var li3 = document.createElement("li");
    var button3 = document.createElement("button");
    button3.innerHTML = "Third Answer";
    li3.appendChild(button3);
    question2El.appendChild(li3);
    
    var li4 = document.createElement("li");
    var button4 = document.createElement("button");
    button4.innerHTML = "Fourth Answer";
    li4.appendChild(button4);
    question2El.appendChild(li4);
}

//question 3
var answer2 = function (event) {
    page2El.setAttribute("style", "display: none;");

    var question = document.createElement("h2");
    question.innerHTML = "Question Three";
    question3El.appendChild(question);
    
    var li1 = document.createElement("li");
    var button1 = document.createElement("button");
    button1.innerHTML = "First Answer";
    li1.appendChild(button1);
    question3El.appendChild(li1);
    
    var li2 = document.createElement("li");
    var button2 = document.createElement("button");
    button2.innerHTML = "Second Answer";
    li2.appendChild(button2);
    question3El.appendChild(li2);
    
    var li3 = document.createElement("li");
    var button3 = document.createElement("button");
    button3.innerHTML = "Third Answer";
    li3.appendChild(button3);
    question3El.appendChild(li3);
    
    var li4 = document.createElement("li");
    var button4 = document.createElement("button");
    button4.innerHTML = "Fourth Answer";
    li4.appendChild(button4);
    question3El.appendChild(li4);
}

//question 4
var answer3 = function (event) {
    page3El.setAttribute("style", "display: none;");

    var question = document.createElement("h2");
    question.innerHTML = "Question Four";
    question4El.appendChild(question);
    
    var li1 = document.createElement("li");
    var button1 = document.createElement("button");
    button1.innerHTML = "First Answer";
    li1.appendChild(button1);
    question4El.appendChild(li1);
    
    var li2 = document.createElement("li");
    var button2 = document.createElement("button");
    button2.innerHTML = "Second Answer";
    li2.appendChild(button2);
    question4El.appendChild(li2);
    
    var li3 = document.createElement("li");
    var button3 = document.createElement("button");
    button3.innerHTML = "Third Answer";
    li3.appendChild(button3);
    question4El.appendChild(li3);
    
    var li4 = document.createElement("li");
    var button4 = document.createElement("button");
    button4.innerHTML = "Fourth Answer";
    li4.appendChild(button4);
    question4El.appendChild(li4);
}

//Final Page
var answer4 = function (event) {
    page4El.setAttribute("style", "display: none;");

    var done = document.createElement("h1");
    done.innerHTML = "All done!"
    doneEl.appendChild(done);

    var score = document.createElement("h2");
    score.innerHTML = "Your final score is XX"
    scoreEl.appendChild(score);

    

    


}


startingPageEl.addEventListener("click", startQuiz);
pageEl.addEventListener("click", answer1);
page2El.addEventListener("click", answer2);
page3El.addEventListener("click", answer3);
page4El.addEventListener("click", answer4);