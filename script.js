const questions = [
    {
        'que': 'What is the capital of France?',
        'a': 'Paris',
        'b': 'London',
        'c': 'Berlin',
        'd': 'Madrid',
        'correct': 'a'
    },

    {
        'que': 'Which planet is known as the Red Planet?',
        'a': 'Earth',
        'b': 'Mars',
        'c': 'Venus',
        'd': 'Jupiter',
        'correct':'b'
    },

    {
        'que': 'What is 2 + 2',
        'a': '3',
        'b': '4',
        'c': '5',
        'd': '6',
        'correct':'b'
    }
]

let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
// const data = questions[index];
const quesBox = document.getElementById('quesBox');
const optioninputs = document.querySelectorAll('.options');
const loadQuestion = () => {
    if(index === total) {
        return endQuiz();
    }
    reset();
    const data = questions[index];
    quesBox.innerText = `${index+1}) ${data.que}`;
    optioninputs[0].nextElementSibling.innerText = data.a;
    optioninputs[1].nextElementSibling.innerText = data.b;
    optioninputs[2].nextElementSibling.innerText = data.c;
    optioninputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    console.log(ans, data.correct);

    if(ans === data.correct) {
        right++;
    }
    else{
        wrong++;
    }
    // console.log(ans, data.correct);

    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optioninputs.forEach(
        (input) => {
            if(input.checked) {
                answer = input.value;
            }
            
        }
    )
    return answer;
}

const reset = () => {
    optioninputs.forEach(
        (input) => {
            input.checked = false;
            
        });
}

const endQuiz = () => {
    document.getElementById('box').innerHTML = 
    `<div style="text-align: center">
    <h3> Thank you for playing the quiz </h3>
    <h2>${right} / ${total} </h2>
    </div>`
}
// submitQuiz();
// getAnswer();

loadQuestion();