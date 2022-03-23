
/* GIVEN I am taking a code quiz1                               }   07
WHEN I click the start button                                   }   addEventListener
THEN a timer starts and I am presented with a question          }   11,12,13
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly                            }
THEN time is subtracted from the clock                          }   09
WHEN all questions are answered or the timer reaches 0          }   10
THEN the game is over                                           }
WHEN the game is over                                           
THEN I can save my initials and my score */


/* .appendChild
.createElement
variable.addEventListener("click", function(){})
function setTime() {}
event.target() (returns user answer)

*/



var questionArray = [
    {
        question: "What is the name of the tavern in the Shire?",
        choices: ["The Lumpy Pumpkin", "The Green Dragon", "The Blue Wizards", "The Bent Elbow"],
        answer: "The Green Dragon"
    },
    {
        question: "Who resided in the tower of Isengard?",
        choices: ["Sauron","Radagast","Saruman","Bilbo"],
        answer: "Saruman"
    },
    {
        question: "In The Lament for Boromir, which wind is not mentioned?",
        choices: ["The North Wind","The East Wind","The South Wind","The West Wind"],
        answer: "The East Wind"
    },
    {
        question: "Who was the first man to falsley claim the Kingship of Numenor?",
        choices: ["Elros Tar-Minyatur", "Ar-Pharazon","Tar-Ancalime","Tar-Anducal"],
        answer: "Tar-Anducal"
    },
    {
        question: "How many names did the city of Gondolin possess?",
        choices: ["Seven","Five","One","Thirteen"],
        answer: "Seven"
    },
    {
        question: "What monsters did Morgoth release at the end of the War of Wrath?",
        choices: ["Balrogs","Winged Dragons","Skinchangers","Mountain Giants"],
        answer: "Winged Dragons"
    },
    {
        question: "Where did the fathers of the Dwarves first discover Durin's Crown?",
        choices: ["The Bridge of Khazad-Dum","Belegost","The Lonely Mountain","The Lake of Mirrormere"],
        answer: "The Lake of Mirrormere"
    },
]

var submitEl = document.querySelector("#startButton");
var startUp = document.querySelector(".startPage");
var quizStartUp = document.querySelector(".quizPage");
var questions = document.querySelector("#questionSpace");

var firstButton = document.querySelector('#buttonA');
var secondButton = document.querySelector('#buttonB');
var thirdButton = document.querySelector('#buttonC');
var fourthButton = document.querySelector('#buttonD');

var timerElement = document.querySelector("#timerElement")
var timerCount = 100
var i=0


function startTimer() {
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount <= 0) {
        window.alert("You lose. Major L.");
      }
      if (i == 7){
        window.alert("You win!");
      }
    }, 1000);
  }

function beginQuiz() {
    startTimer();
    startUp.setAttribute("style","display:none");
    quizStartUp.setAttribute("style","display:block");
    showQuestion();
}
    

function showQuestion() {
    
    var currentQuestion = questionArray[i].question;
    
    questions.textContent = currentQuestion;
    
    firstButton.setAttribute('value', questionArray[i].choices[0]);
    firstButton.addEventListener("click", questionCycle);

    secondButton.setAttribute('value', questionArray[i].choices[1]);
    secondButton.addEventListener("click", questionCycle);

    thirdButton.setAttribute('value', questionArray[i].choices[2]);
    thirdButton.addEventListener("click", questionCycle);

    fourthButton.setAttribute('value', questionArray[i].choices[3]);
    fourthButton.addEventListener("click", questionCycle);
}

function questionCycle(event) {
    var userAnswer = event.target.value;
    console.log(userAnswer);


    if (userAnswer === questionArray[i].answer) {

        i++;
        showQuestion();

    } 
    else {
        timerCount = timerCount - 25;
        i++;
        showQuestion();
    }
}

submitEl.addEventListener("click", beginQuiz);
