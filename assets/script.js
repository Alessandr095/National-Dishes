// javascript section of the 10 questions and answers used for the quiz Q/A placeholders
const questions = [
    {
        question: "This is Kabuli pulao, what Country is this from?",
        answers: [
            { text: "South Africa", correct: false },
            { text: "Afghanistan", correct: true },
            { text: "Germany", correct: false },
            { text: "Poland", correct: false },
        ]
    },
    {
        question: "This is Feijoada, what Country is this from?",
        answers: [
            { text: "Thailand", correct: false },
            { text: "Spain", correct: false },
            { text: "Brazil", correct: true },
            { text: "Portugal", correct: false },
        ]
    },
    {
        question: "This is Poutine, what Country is this from?",

        answers: [
            { text: "Colombia", correct: false },
            { text: "China", correct: false },
            { text: "Australia", correct: false },
            { text: "Canada", correct: true },
        ]
    },
    {
        question: "This is Moambe chicken, what Country is this from?",
        answers: [
            { text: "Zambia", correct: false },
            { text: "Namibia", correct: false },
            { text: "D.R.C", correct: true },
            { text: "Russia", correct: false },
        ]
    },
    {
        question: "This is Stegt flæsk, what Country is this from?",
        answers: [
            { text: "Norway", correct: false },
            { text: "Iceland", correct: false },
            { text: "Greenland", correct: false },
            { text: "Denmark", correct: true },
        ]
    },
    {
        question: "This is Nshima, what Country is this from?",
        answers: [
            { text: "Kenya", correct: false },
            { text: "Zambia", correct: true },
            { text: "Greece", correct: false },
            { text: "Turkey", correct: false },
        ]
    },
    {
        question: "This is Ful medames, what Country is this from?",
        answers: [
            { text: "France", correct: false },
            { text: "Egypt", correct: true },
            { text: "Sweden", correct: false },
            { text: "Angola", correct: false },
        ]
    },
    {
        question: "This is Bobotie, what Country is this from?",
        answers: [
            { text: "South Africa", correct: true },
            { text: "Netherlands", correct: false },
            { text: "Botswana", correct: false },
            { text: "England", correct: false },
        ]
    },
    {
        question: "This is Cawl, what Country is this from?",
        answers: [
            { text: "Ireland", correct: false },
            { text: "Scotland", correct: false },
            { text: "Wales", correct: true },
            { text: "Finland", correct: false },
        ]
    },
    {
        question: "This is Ceviche, what Country is this from?",
        answers: [
            { text: "Colombia", correct: false },
            { text: "Peru", correct: true },
            { text: "Mexico", correct: false },
            { text: "Argentina", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question"); //variable for the question title, for the a later function to replace the place holder text with the question text
const answerButtons = document.getElementById('answer-buttons'); // variable for the answer buttons, for the later function to replace the place holder text with the answer buttons text 
const nextButton = document.getElementById("next-btn");// variable for the next button, for a later function of replacing the place holder next button to only appear after a answer button is clicked

let currentQuestionIndex = 0; // variable for current question
let score = 0; // variable for score to hold the value of 0
/**
 * a function that when the quiz starts the score with be set to 0
 */
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();

}
/**
 * a function that replaces the placeholder text for in the question variable
 */
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex +1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

}
/**
 * a function to remove the next button place holder 
 * and removed it from view until an answer button is clicked
 */
function resetState(){
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
/**
 * a function with variables to replace the place holder text for the answer buttons and 
 * an if statement that checks if the answer clicked is correct or incorrect
 */
function selectAnswer(event){
    const selectedBtn = event.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct")// class added later for colour change in answer button
        score++; // incriments score if correct
    } else {
        selectedBtn.classList.add("incorrect");// if not correct changes button colour
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        } 
        button.Disabled = true;
    })
    nextButton.style.display = "block";

}
/**
 * a function to show the score at the end of the game with a value out of 10
 */
function showScore(){
    resetState()
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again"// replaces next button at end of quiz
    nextButton.style.display = "block" //hides next button
}
/**
 * a function that make the next button functional to cycle through the 10 questions
 * and if at the end of the 10 questions show score rather than cycle to another question
 */
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}
// event listener if next button gets clicked and its the end of the quiz restart quiz
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});


    
