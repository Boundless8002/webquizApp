
let startMinutes = 2;
let currtime = startMinutes * 60;
const countdown = document.getElementById('time');
let timeout;
setInterval(update, 1000);

function update() {
    let minutes = Math.floor(currtime / 60);
    let seconds = currtime % 60;

    minutes = minutes < 10 ? '0' + minutes : minutes;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdown.innerHTML = `${minutes} : ${seconds}`;
    currtime--;
    currtime = currtime < 0 ? 0 : currtime;
    if (currtime === 0) {
        setTimeout(() => {
            alert("Time up");
            endQuiz();
        }, 2000)


    }
}


const questions = [{
    'que': 'Who is the interpreter of Indian constition ?',
    'a': 'Sansad',
    'b': 'Prime Minister',
    'c': 'President',
    'd': 'None of these',
    'correct': 'd',
    'tickedAnswer': '',

},
{
    'que': 'Who is the current chief justice of india?',
    'a': 'Deepak Mishra',
    'b': 'DY chandrachud',
    'c': 'UU Lalit',
    'd': 'None of the above',
    'correct': 'b',
    'tickedAnswer': '',

},
{
    'que': 'What is value sin30?',
    'a': '1',
    'b': '0',
    'c': '.5',
    'd': '-1',
    'correct': 'c',
    'tickedAnswer': '',

},
{
    'que': 'Current Prime Minsiter of an India',
    'a': 'N Modi',
    'b': 'OM Birla',
    'c': 'Piyush Goyal',
    'd': 'Rahul Gandhi',
    'correct': 'a',
    'tickedAnswer': '',

},
{
    'que': 'CAG related to which article?',
    'a': '154',
    'b': '148',
    'c': '76',
    'd': '324',
    'correct': 'b',
    'tickedAnswer': '',

}

]




let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
const quesBox = document.getElementById('questionset');
const optionInputs = document.querySelectorAll('.options');

const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }
    reset();

    const data = questions[index];

    quesBox.innerText = `${index + 1}. ${data.que}`;

    optionInputs.forEach((input, i) => {
        input.nextElementSibling.innerText = data[String.fromCharCode(97 + i)];
    });
};

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();

    // If there was a previously ticked answer, adjust the counts accordingly
    if (data.tickedAnswer !== '') {
        if (data.tickedAnswer === data.correct) {
            right--;
        } else {
            wrong--;
        }
    }

    // Update the ticked answer
    data.tickedAnswer = ans;

    // Update the counts based on the current answer
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }

    index++;
    loadQuestion();
};


const previous = () => {
    if (index > 0) {
        index--;
        loadQuestion();
        getAnswer();
    }
};

const getAnswer = () => {
    let answer = null;

    optionInputs.forEach((input, i) => {
        if (input.checked) {
            answer = String.fromCharCode(97 + i);
            input.checked = true;
        }
    });

    return answer;
};

const reset = () => {
    optionInputs.forEach(input => {
        input.checked = false;
    });

    if (questions[index].tickedAnswer) {
        optionInputs[questions[index].tickedAnswer.charCodeAt(0) - 97].checked = true;
    }
};

function again() {
    location.href = "index.html";
}

// const endQuiz = () => {
//     const resultDiv = document.getElementById('quiz');
//     resultDiv.innerHTML = `
//         <div id="result">
//             <h3>Thank you very much</h3>
//             <h2>You scored ${right} out of ${total}</h2>
//         </div>
//         <div id="start-again">
//             <button id="again" onClick="again()">Start Again</button>
//         </div>
//     `;
// };
const endQuiz = () => {

    const resultDiv = document.getElementById('quiz');
    let message = '';
    let imageSrc = '';

    // Determine the appropriate message and image based on the score
    if (right === total) {
        message = 'Congratulations! You scored a perfect score!';
        imageSrc = 'https://s3.amazonaws.com/media.mediapost.com/dam/cropped/2018/07/18/emoji-hey-600_M9RRgzt.jpg';
    } else if (right >= total * 0.75) {
        message = 'Great job! You scored really well!';
        imageSrc = 'https://i.pinimg.com/originals/2b/eb/0c/2beb0c9dfae9bdb361e6e1aa09f82be2.jpg';
    } else if (right >= total * 0.5) {
        message = 'Good effort! You scored decently.';
        imageSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvW2HD9_R5ISGQtFRAoVz-VnBDqP8nogXHrqORHdLUntUK_CBeoitcIV7UA4Y758jmy40&usqp=CAU';
    } else {
        message = 'Keep practicing! You can improve.';
        imageSrc = 'https://cdn.theatlantic.com/thumbor/HSNOivXdm_GB-_tJqqq-Jh-T8SY=/312x304:3688x3680/540x540/media/img/mt/2017/08/shutterstock_668917297/original.jpg';
    }

    resultDiv.innerHTML = `
        <div id="result">
            <h3>${message}</h3>
            <h2>You scored ${right} out of ${total}</h2>
            <img src="${imageSrc}" alt="Score Image" style="width:300px " />
        </div>
        <div id="start-again">
            <button id="again" onClick="again()">Start Again</button>
        </div>
    `;
};



loadQuestion();





