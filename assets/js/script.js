
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

var xxx = document.querySelector(".class/#id") */

//var tagName = alert("The violence has escalated.");

//var tag = document.createElement(tagName);

//tag.textContent = "Pelican."

//document.body.appendChild(tag);

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

var timerElement
var timerCount = 100
var i=0



function startTimer() {
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        if (isWin && timerCount > 0) {
          clearInterval(timer);
          winGame();
        }
      }
      if (timerCount === 0) {
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }

function beginQuiz() {
    startUp.setAttribute("style","display:none");
    quizStartUp.setAttribute("style","display:block");
    

    if (i <= questionArray.length) {
        var currentQuestion = document.createTextNode("");
        currentQuestion.textContent = questionArray[i].question
        questions.appendChild(currentQuestion);
    
        firstButton.setAttribute('value', questionArray[i].choices[0]);
        secondButton.setAttribute('value', questionArray[i].choices[1]);
        thirdButton.setAttribute('value', questionArray[i].choices[2]);
        fourthButton.setAttribute('value', questionArray[i].choices[3]);
    
        function questionCycle(event){
            buttonValue = event.target
            i=i+1;
                
    
            /* buttonValue === questionArray[i].answer */
                
        }
        firstButton.addEventListener("click", questionCycle);

    };
    
    
}

submitEl.addEventListener("click", beginQuiz);
