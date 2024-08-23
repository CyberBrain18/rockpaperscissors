let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');

const msgPara = document.querySelector('#msg');

const userScorePara = document.querySelector('#user');

const compScorePara = document.querySelector('#comp');

const genCompChoice = () => {
    let options = ['rock', 'paper', 'scissors'];
    const randomValue = Math.floor(Math.random() * 2);
    return options[randomValue];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore ++;
        userScorePara.innerText = userScore;
        console.log('You win!');
        msgPara.innerText = 'You won! '+ userChoice+ ' beats '+ compChoice;
        msgPara.style.backgroundColor = 'green';
    }

    else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log('You lose!');
        msgPara.innerText = 'You lose! '+ compChoice+' beats '+ userChoice;
        msgPara.style.backgroundColor = 'red';
    }
};   

const drawGame = () => {
    console.log('Game is drawn');
    msgPara.innerText = 'Game is drawn!';
    msgPara.style.backgroundColor = '#2f1cdf'
};

const playgame = (userChoice) => {
    console.log('User-choice = ', userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log('Comp choice = ', compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }

    else {
        let userWin = true;
        if (userChoice === 'rock') {
            userWin = compChoice === 'paper' ? false : true;   
        } 

        else if (userChoice === 'paper') {
            userWin = compChoice === 'scissor' ? false : true;
        }

        else {
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin, compChoice, userChoice);
    }
};

choices.forEach((choice) => {
    
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playgame(userChoice);
    });
});