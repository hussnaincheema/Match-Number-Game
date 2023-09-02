let random = Math.floor(Math.random() * 21);
let appScore = 20;
let appHighScore = 0;


const body = document.querySelector('body');
//console.log(body)
const againButton = document.querySelector('.again');
const randomNumber = document.querySelector('.number');
const guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');


check.addEventListener('click',()=>{
    if(guess.value==random){
        message.innerHTML = 'Correct Number';
        randomNumber.innerHTML = random;
        body.style.backgroundColor = '#60b347';
        check.disabled = true;
        if(appScore > appHighScore){
            appHighScore = appScore;
            highscore.innerHTML = appScore;
        }
    }else{
        appScore--;
        score.innerHTML--; 
        if(guess.value>random){
            message.innerHTML = 'Too high...';
        }else{
            message.innerHTML = 'Too low...'; 
        }
    }
})


againButton.addEventListener('click', reset)

function reset(){
    randomNumber.innerHTML = '?';
    check.disabled = false;
    message.innerHTML = 'Start guessing...';
    score.innerHTML = 20;
    guess.value = '';
    body.style.backgroundColor = '#222';
    appScore = 20;
}