const questions = [
    {
        question: "How do you attach files using Microsoft Outlook?",
        optionA: "Clic on the buttin labeled 'Forward' and then 'Open'",
        optionB: "Click on paper click icon and then 'open'",
        optionC: "Right click on the mouse and then srlrct 'Follow Up'",
        optionD: "This function cannot be done unless the file is at least 25mb",
        correctOption: "optionB"
    },

    {
        question: "How would you print one paragraph of text from a web page without printing the whole page?",
        optionA: "Goto the file and click 'Print Preview'",
        optionB: "Go to file and click 'Print'. Check the box labeled 'Print Selection', then click 'Print'",
        optionC: "Press the 'Print' button on the toolbar at the top of te screen",
        optionD: "Highlight the the text you want to print.Go to the file and click 'Print'.Check the box labeled 'Print Selection', then click 'Print'",
        correctOption: "optionD"
    },

    {
        question: "Is it possible to have more than one prorgram open at the same time?",
        optionA: "Yes",
        optionB: "No",
        correctOption: "optionB"
    },

    {
        question: "How you properly shut down the computer?",
        optionA: "Press the power switch on the front of the CPU to turn off the machine",
        optionB: "Press the power button on the front of the moniter",
        optionC: "Go to the 'Start' button and select 'Shut Down'",
        optionD: "Press the 'Shut Down' key on the keyboard",
        correctOption: "optionC"
    },

    {
        question: "How do you rename the file on your computer?",
        optionA: "Right click on the file name and choose 'Rename File', Type the new file name",
        optionB: "Left click on the file nameand choose 'Rename File'.Type the new file name",
        optionC: "Open the file. Click 'Edit' at the top left of the screen and select 'Rename'",
        optionD: "Open the file. Click 'File' at the top left of the screen and select 'Save'",
        correctOption: "optionA"
    },

    {
        question: "Select the correct format for an email address from the choices below.",
        optionA: "Bob smith@yahoo.com",
        optionB: "Bobsmith342@yahoo.com",
        optionC: "www.bobsmith.com",
        optionD: "www.bobsmith.yahoo.com",
        correctOption: "optionB"
    },

    {
        question: "How do you select text to copy or delete in a word document?",
        optionA: "Go to 'Edit' at the top of the screen and select 'Copy'",
        optionB: "Place the cursor at the beginning of the text you wish to highlight, press the left mouse button and drag the mouse across the text.",
        optionC: "Use the backspace key until the cursor reaches the text you wish to select. Press 'Ctrl' to select the text.",
        optionD: "Press the 'Page Up' key on the keyboard.",
        correctOption: "optionB"
    },

    {
        question: "How do you open a program such a microsoft word when there are no icons on the desktop?",
        optionA: "Double click on the desktop to reveal hidden icons.",
        optionB: "Click the start button and select the program from the menu.",
        optionC: "Use a keyboard command.",
        optionD: "It's not possible to open a program when there are no icons on the desktop.",
        correctOption: "optionB"
    },

    {
        question: "When filling out an online form, the * (asterisk) symbol usually means that it is a required filed.",
        optionA: "True",
        optionB: "False",
        correctOption: "optionB"
    },

    {
        question: "If you needed to open a different website without disrupting the work you're currently working on in one window, what would be the best practice be to open that new site without losing your place?",
        optionA: "Minimize your current window, then click on your web browser icon on your desktop to open a new window.",
        optionB: "Click on the link, get the data you need, then press the back button to go back to your old page you were working on.",
        optionC: "Click New Tab at the top of the browser page or hit Ctrl + T",
        optionD: "Exit your current window by clicking the X in the top right-hand corner. Then open a new window.",
        correctOption: "optionC"
    },

    // {
    //     question: "Where is the world tallest building located ?",
    //     optionA: "Africa",
    //     optionB: "California",
    //     optionC: "Dubai",
    //     optionD: "Italy",
    //     correctOption: "optionC"
    // },

    // {
    //     question: "The longest river in the United Kingdom is ?",
    //     optionA: "River Severn",
    //     optionB: "River Mersey",
    //     optionC: "River Trent",
    //     optionD: "River Tweed",
    //     correctOption: "optionA"
    // },


    // {
    //     question: "How many permanent teeth does a dog have ?",
    //     optionA: "38",
    //     optionB: "42",
    //     optionC: "40",
    //     optionD: "36",
    //     correctOption: "optionB"
    // },

    // {
    //     question: "Which national team won the football World cup in 2018 ?",
    //     optionA: "England",
    //     optionB: "Brazil",
    //     optionC: "Germany",
    //     optionD: "France",
    //     correctOption: "optionD"
    // },

    // {
    //     question: "Which US state was Donald Trump Born ?",
    //     optionA: "New York",
    //     optionB: "California",
    //     optionC: "New Jersey",
    //     optionD: "Los Angeles",
    //     correctOption: "optionA"
    // },

    // {
    //     question: "How man states does Nigeria have ?",
    //     optionA: "24",
    //     optionB: "30",
    //     optionC: "36",
    //     optionD: "37",
    //     correctOption: "optionC"
    // },

    // {
    //     question: "____ is the capital of Nigeria ?",
    //     optionA: "Abuja",
    //     optionB: "Lagos",
    //     optionC: "Calabar",
    //     optionD: "Kano",
    //     correctOption: "optionA"
    // },

    // {
    //     question: "Los Angeles is also known as ?",
    //     optionA: "Angels City",
    //     optionB: "Shining city",
    //     optionC: "City of Angels",
    //     optionD: "Lost Angels",
    //     correctOption: "optionC"
    // },

    // {
    //     question: "What is the capital of Germany ?",
    //     optionA: "Georgia",
    //     optionB: "Missouri",
    //     optionC: "Oklahoma",
    //     optionD: "Berlin",
    //     correctOption: "optionD"
    // },

    // {
    //     question: "How many sides does an hexagon have ?",
    //     optionA: "Six",
    //     optionB: "Sevene",
    //     optionC: "Four",
    //     optionD: "Five",
    //     correctOption: "optionA"
    // },

    // {
    //     question: "How many planets are currently in the solar system ?",
    //     optionA: "Eleven",
    //     optionB: "Seven",
    //     optionC: "Nine",
    //     optionD: "Eight",
    //     correctOption: "optionD"
    // },

    // {
    //     question: "Which Planet is the hottest ?",
    //     optionA: "Jupitar",
    //     optionB: "Mercury",
    //     optionC: "Earth",
    //     optionD: "Venus",
    //     correctOption: "optionB"
    // },

    // {
    //     question: "where is the smallest bone in human body located?",
    //     optionA: "Toes",
    //     optionB: "Ears",
    //     optionC: "Fingers",
    //     optionD: "Nose",
    //     correctOption: "optionB"
    // },

    // {
    //     question: "How many hearts does an Octopus have ?",
    //     optionA: "One",
    //     optionB: "Two",
    //     optionC: "Three",
    //     optionD: "Four",
    //     correctOption: "optionC"
    // },

    // {
    //     question: "How many teeth does an adult human have ?",
    //     optionA: "28",
    //     optionB: "30",
    //     optionC: "32",
    //     optionD: "36",
    //     correctOption: "optionC"
    // }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
    window.location.href="interview.html";
    
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
    
}