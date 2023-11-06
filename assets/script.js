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
const answerButton = document.getElementById('answer-buttons'); // variable for the answer buttons, for the later function to replace the place holder text with the answer buttons text 
const nextButton = document.getElementById("next-btn");// variable for the next button, for a later function of replacing the place holder next button to only appear after a answer button is clicked
/**
 * a function that when the quiz starts the score with be set to 0
 */
function startQuiz(){

}
/**
 * a function that replaces the placeholder text for in the question variable
 */
function showQuestions(){

}
/**
 * a function to remove the next button place holder 
 * and removed it form view until an answer button is clicked
 */
function resetState(){

}
/**
 * a function with variables to replace the place holder text for the answer buttons and 
 * an if statement that checks if the answer clicked is correct or incorrect
 */
function selectAnswer(){

}
/**
 * a function to show the score at the end of the game with a value out of 10
 */
function showScore(){

}
/**
 * a function that make the next button functional to cycle through the 10 questions
 */
function handleNextButton(){

}


    
