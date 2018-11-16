var question1 = {
    questionText: "What is The Answer?",
    answer1: "42",
    answer2: "William Jennings Bryan",
    answer3: "Phnom Penh",
    answer4: "Tortillas",
    correctAnswer: ""
};

var question2 = {
    questionText: "Which of these visionaries gets the credit (and blame) for JavaScript?",
    answer1: "Grace Hopper",
    answer2: "Brendan Eich",
    answer3: "James Gosling",
    answer4: "Brian Kernighan",
    correctAnswer: ""
};

var question3 = {
    questionText: "Which of these legendary game designers gave his life in a car accident to save the lives of their wife and unborn child?",
    answer1: "Justin Chin",
    answer2: "Sean Murray",
    answer3: "Will Wright",
    answer4: "Brian Wood",
    correctAnswer: ""
};

var question4 = {
    questionText: "Select the scripting languages allowed by the Unity Engine",
    answer1: "C, Python",
    answer2: "Java, Go",
    answer3: "C#, JavaScript, C++ native",
    answer4: "Unity locks you out of scripting languages",
    correctAnswer: ""
};

var questionTextElement, answer1Element, answer2Element, answer3Element, answer4Element;
var answerTextElement;

var questionIndex;

var questions = [ question1, question2, question3, question4 ]

function StartQuiz() {
    questions[0].correctAnswer = questions[0].answer1;
    questions[1].correctAnswer = questions[1].answer2;
    questions[2].correctAnswer = questions[2].answer4;
    questions[3].correctAnswer = questions[3].answer3;



    questionIndex = 0;
    answerTextElement = document.getElementById("answerText");
    questionTextElement = document.getElementById("questionText");
    answer1Element = document.getElementById("answer1").nextElementSibling; 
    answer2Element = document.getElementById("answer2").nextElementSibling;
    answer3Element = document.getElementById("answer3").nextElementSibling;
    answer4Element = document.getElementById("answer4").nextElementSibling

    SetQuestion(questions[0]);
}

function SetQuestion(question)
{
    questionTextElement.innerText = question.questionText;
    answer1Element.innerText = question.answer1;
    answer2Element.innerText = question.answer2;
    answer3Element.innerText = question.answer3;
    answer4Element.innerText = question.answer4;
    return;
}

function SubmitAnswer()
{
    var result = GetSelectedAnswer();
    if (result !== null)
    {
        if (result.nextElementSibling.innerText === questions[questionIndex].correctAnswer){
            alert("That's right!")
            answerTextElement.innerText = "That's right!";
            if (questionIndex++ < questions.length){
                SetQuestion(questions[questionIndex]);
            }
            else {
                alert("You've reached the end of our quiz! Please play again.")
                questionIndex = 0;
                SetQuestion(questions[0]);
            }
        }
        else {
            answerTextElement.innerText = "Not what we were looking for. Please try again!";
        } 
    }
    else {
        answerTextElement.innerText = "No answer selected! Please try again.";
        return;   
    }  
    //alert(result.nextElementSibling.innerText);
    ClearAnswerButtons();

}

function GetSelectedAnswer()
{
    var answers = document.getElementsByName("answer");
    for (i = 0; i < answers.length; i++)
    {
        if (answers[i].checked) {return answers[i];}
    }
    return null;
}

function ClearAnswerButtons(){
    var answers = document.getElementsByName("answer");
    for (i = 0; i < answers.length; i++)
    {
        answers[i].checked = false;
    }
}

