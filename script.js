const questions = [
    {
        question: "Qual é a capital da França?",
        options: ["Paris", "Londres", "Roma", "Berlim"],
        answer: "Paris"
    },
    {
        question: "Qual é o maior planeta do nosso sistema solar?",
        options: ["Terra", "Marte", "Júpiter", "Saturno"],
        answer: "Júpiter"
    },
    {
        question: "Quem escreveu 'Dom Quixote'?",
        options: ["Miguel de Cervantes", "William Shakespeare", "Dante Alighieri", "Fiódor Dostoiévski"],
        answer: "Miguel de Cervantes"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.innerHTML = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.innerHTML = option;
        button.onclick = () => selectOption(option);
        optionsElement.appendChild(button);
    });
}

function selectOption(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    document.querySelectorAll('#options button').forEach(button => {
        button.disabled = true;
        if (button.innerHTML === currentQuestion.answer) {
            button.style.backgroundColor = 'green';
        } else if (button.innerHTML === selectedOption) {
            button.style.backgroundColor = 'red';
        }
    });
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
    document.getElementById('next-button').disabled = true;
}

function showResult() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `<h2>Você acertou ${score} de ${questions.length} perguntas!</h2>`;
    document.getElementById('next-button').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
    document.getElementById('next-button').disabled = true;
});
