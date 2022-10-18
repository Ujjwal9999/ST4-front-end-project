let a=1;
function star(){
    let b=document.getElementById("info1")
    b.classList.remove("dis")
    let c=document.getElementById("start1")
    c.classList.add("dis")
}

function exit2(){
    let i=document.getElementById("info1")
    i.classList.add("dis")
    let j=document.getElementById("start1")
    j.classList.remove("dis")
}

function con1(){
    let b=document.getElementById("ques_block")
    b.classList.remove("dis")
    let c=document.getElementById("info1")
    c.classList.add("dis")
}

const quizDB=[
    {
    question:"Q1:What is the full form of HTML?",
    a:"Hello To My Land",
    b:"Hey Text Markup Language",
    c:"Hyper Text Makup Language",
    d:"Hyper Text Markup Language",
    ans:"ans4"
},
{
    question:"Q2:What is the full form of CSS?",
    a:"Cascading Style Sheet",
    b:"Hey Text Markup Language",
    c:"Cascading Stunt Sheet",
    d:"Cascading Style Sheep",
    ans:"ans1"
},
{
    question:"Q3:What is the full form of HTTP?",
    a:"Hello To The World",
    b:"Hyper Text Transfer Protocol",
    c:"Hyper Text Text Producer",
    d:"Hyper Text Markup Language",
    ans:"ans2"
}
];

const arr=[];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const submit = document.querySelector('#sub_q');

const answers=document.querySelectorAll('.answer');

const prev = document.querySelector('#prev_q');

let questionCount=0;
let score = 0;
const loadQuestion=()=>{
    const questionList = quizDB[questionCount];
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

loadQuestion();

const getCheckAnswer=()=>{
    let answer;
    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
}

const deselectAll=()=>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click',()=>{
    const checkedAnswer = getCheckAnswer();

    if(checkedAnswer === quizDB[questionCount].ans){
        arr[questionCount]=true;
    }
    else{
        arr[questionCount]=false;
    }

    deselectAll();
    
    if(questionCount<quizDB.length-1){
        questionCount++;
    }

    if(questionCount<quizDB.length){
        loadQuestion();
    }

});

prev.addEventListener('click',()=>{
    const checkedAnswer = getCheckAnswer();
    if(checkedAnswer===quizDB[questionCount].ans){
        arr[questionCount]=true;
    }
    else{
        arr[questionCount]=false;
    }

    deselectAll();
    if(questionCount>0){
        questionCount--;
    }

    if(questionCount>=0){
        loadQuestion();
    }

});

const sub_test = document.querySelector('#subt');

sub_test.addEventListener('click',()=>{
    let g = document.getElementById("res_f");
    g.classList.remove("dis");
    let r = document.getElementById("ques_block");
    r.classList.add("dis");
    let t=0;
    for(let i=0;i<quizDB.length;i++){
        if(arr[i]===true){
            t++;
        }
    }
    let o = "( "+t+" out of "+quizDB.length+" )";
    const w=document.querySelector('#res1');
    w.innerHTML = o;

});


const start_time = quizDB.length;
let time = start_time * 60;

var isPause = false;


var timo = setInterval(() => {
    if (isPause) {
        var minutes = Math.floor(time / 60);
        var seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById("tim").innerHTML = minutes + " : " + seconds;
        if (time > 0) {
            time--;
        }
        if(seconds==0 && minutes==0){
                let g = document.getElementById("res_f");
                g.classList.remove("dis");
                let r = document.getElementById("ques_block");
                r.classList.add("dis");
                let t=0;
                for(let i=0;i<quizDB.length;i++){
                    if(arr[i]===true){
                        t++;
                    }
                }
                let o = "( "+t+" out of "+quizDB.length+" )";
                const w=document.querySelector('#res1');
                w.innerHTML = o;
        }
    }
}, 1000);

let co = document.querySelector('#continue1');

co.addEventListener('click', (e) => {
    e.preventDefault();
    isPause = true;
});


sub_test.addEventListener('click', (e) => {
    e.preventDefault();
    isPause = false;
});